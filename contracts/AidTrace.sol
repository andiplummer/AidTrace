pragma solidity ^0.5.0;

contract AidTrace {

  
    
   DonationEvent[] public deployedEvents;

    function createEvent(uint minimum, string memory name) public {
       DonationEvent newDonationEvent = new DonationEvent(minimum, name,msg.sender);
        deployedEvents.push(newDonationEvent);
    }

    function getDeployedEvents() public view returns (DonationEvent[] memory) {
        return deployedEvents;
    }
}

contract DonationEvent {
        event LogContribute(uint _approvedCount);
        event LogRequestCreated(string _description, uint _value, address _recipient);
        event LogRequestApproved(uint _id, uint _approvalCount);
        event LogFinalizedRequest(uint amount, uint _id);

    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    
    uint public minimumContribution;
    string public eventName;
    address public manager;
    mapping(address => bool) public approvers;
    uint public approversCount;

    modifier onlyOwner() {
        require(msg.sender == manager);
        _;
    }

    constructor(uint minimum, string memory name, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);
        
        approvers[msg.sender] = true;
        approversCount++;
        emit LogContribute(approversCount);
    }

    function createRequest(string memory description , uint value, address recipient) public onlyOwner {
        Request memory newRequest = Request({
           description: description,
           value: value,
           recipient: msg.sender,
           complete: false,
           approvalCount: 0
        });
        emit LogRequestCreated(description,value,recipient);
        requests.push(newRequest);
    }

    function approveRequest(uint id) public {
        Request storage request = requests[id];

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
        emit LogRequestApproved(id, request.approvalCount);
    }

    function finalizeRequest(uint id) public restricted {
        Request storage request = requests[id];

        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);
        
        msg.sender.transfer(request.value);
        request.complete = true;
        emit LogFinalizedRequest(address(msg.sender).balance, id);
    }

    function getSummary() public view returns (
      uint, uint, uint, uint, address
      ) {
        return (
          minimumContribution,
          address(msg.sender).balance,
          requests.length,
          approversCount,
          manager
        );
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
}