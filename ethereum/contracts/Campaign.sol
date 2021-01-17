//OM NAMO NARAYANA

pragma solidity ^0.4.17;

contract UserFactory {
    address[] public deployedUsers;

    function createUser() public {
        address newUser = new User(msg.sender);
        deployedUsers.push(newUser);
    }

    function getUsers() public view returns (address[]) {
        return deployedUsers;
    }
}

contract User {
    struct Ride {
        string description;
        uint value;
        bool complete;
        uint latitude;
        uint longitude;
        address customer;
        bool satisfaction;
        
    }
    uint public approvalCount;
    Ride[] public rides;
    address public owner;
    uint public approversCount;

    modifier restricted() {
        require(msg.sender == owner);
        _;
    }

    function User(address creator) public {
       owner = creator;
    }

    function book(uint index) public payable {
        Ride storage ride = rides[index];
        require(msg.value >= ride.value);
        require(!ride.complete);//the car is not yet booked
        ride.customer = msg.sender;
        approversCount++;
        ride.complete=true;
        owner.transfer(ride.value);
    }

    function createRide(string description, uint value, uint latitude, uint longitude) public restricted {
        require(approvalCount >= approversCount/2);
        Ride memory newRide = Ride({
           description: description,
           value: value,
           complete: false,
           latitude: latitude,
           longitude: longitude,
           customer: 0x0,
           satisfaction: false
        });

        rides.push(newRide);
    }
    
    function satisfied(uint index) public{
        Ride storage ride = rides[index];
        
        require(ride.customer == msg.sender);
        require(!ride.satisfaction);
        approvalCount++;
    }


    function getSummary() public view returns (
      uint, uint, uint, address
      ) {
        return (
          this.balance,
          rides.length,
          approversCount,
          owner
        );
    }

    function getRidesCount() public view returns (uint) {
        return rides.length;
    }
}
