# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Subticket_1:

Implementation details:
Develop a function to create unique custom_id based on facilities_id, agent_id & agent_last_name
function createCustomID(facilities__id, agent_id, agent_last_name){...}

Acceptance criteria:
1. Unique id should be created for each agent for each facility
2. In case of collision, edge cases should be covered in function for creating custom_id

time: 1 hour(including testing)

Subticket_2:

Create a new API to return list of all Agents in Facility
[{
    name: 'agent_name',
    custom_id: '#createCustomID',
    agent_id: 'default_unique_agent_id_from_Agents_table',
    facilities_id: 'unique_facility_id',
    hours_worked: 'total_hours_worked_in_this_facility',
    total_hours: 'total_hours_worked_across_facilities',
    ...other agent metadata
}]

Acceptance criteria:
1. Should be able to perform GET/POST/DELETE/PUT operations on API
2. Facility admin should be able to get all required information of agent

time: 1 day(including testing)

Subticket_3:

Update 'getShiftsByFacility' function to return custom_id in results using newly created API, along with agent_id.

Acceptance criteria:
1. custom_id should be included in results of function call

time: 1 hour(update and test)

Subticket_3:

Update 'generateReport' function to return custom_id in results using newly created API.

Acceptance criteria:
1. custom_id should be included in results of function call

time: 1 hour(update and test)