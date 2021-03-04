# DappI--State-Machine-Lab
**After accident claims process - State Machine Lab**

**State Data:**
States: [“No Accident”, “Accident”, ‘’ Insurance Broker”, “Fault determined”, “Repair or write off”, “Medical Benefits”, “Death benefit”, “Claim closure”]

_State 0:_
Policy number

_State 1:_
Date of the accident
Time of the accident
Location of the accident
Number of passengers
Names of driver
Licence numbers
Car number plate
Badge number of the investigating officer

_State 2:_
Names of insurance companies
Car Make
Car model
Car year
Broker ID

_State 3:_
Claim reference ID

_State 4:_
Payment ID

_State 5:_
Medical Payment reference ID

_State 6:_
Death benefit payment reference ID

_State 7:_
Claim closure ID



**Transitions:**

Careless driving (Car number plate)

File an accident report (Date of the accident, Time of the accident, Location of the accident, Number of passengers, Names of driver, Licence numbers, Badge number of the investigating officer, Car number plate)

Complete Proof of Loss form (Car Make, Car model, Car year, Car number plate)		

Evaluation of damage (Claim reference ID)

Injured (Medical Payment reference ID) 

Death (Death benefit payment reference ID)

Actual cash value or Damage payment (Payment ID)

Medical expense paid (Medical Payment reference ID) 

Payment to family (Death benefit payment reference ID)

**Functions:**

**Roles:**

File an accident report (Date of the accident, Time of the accident, Location of the accident, Number of passengers, Names of driver, Licence numbers, Badge number of the investigating officer, Car number plate): Car Drivers, Investigating officer

Complete Proof of Loss form (Car Make, Car model, Car year, Car number plate): Car Drivers

Evaluation of damage (Claim reference ID): Insurance Broker

Injured (Medical Payment reference ID): Drivers, Passengers

Death (Death benefit payment reference ID): Drivers, Passengers

Actual cash value or Damage payment (Payment ID): Drivers

Medical expense paid (Medical Payment reference ID): Drivers, Passengers

Payment to family (Death benefit payment reference ID): Family member of Drivers
	




