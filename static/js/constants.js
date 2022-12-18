
//action to be triggered/sent to rasa upon connection. Leave blank if you dont want to trigger any action
const action_name = "";
//message to be sent to rasa upon connection. This is to pass an initial message to rasa to make aware of new client.
const custom_hello_message_to_rasa = '/restart; /vaig_event_start{"caller": "+49000000", "callee": "+4923199768543", "callerHost": "None", "callerDisplayName": "None", "vaigConversationId": "None", "calleeHost": "None"}';
//this one you need to adjust if you run your bot on a server/cloud and not locally
const rasa_server_url = "http://localhost:5005/webhooks/rest/webhook";
//if set the agent will be opened once document loaded. Used in script.js
const open_agent_on_load = false;
const sender_id = uuidv4();
