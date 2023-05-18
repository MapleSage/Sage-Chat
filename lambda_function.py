import boto3
import json

def lambda_handler(event, context):
    # Replace STATE_MACHINE_ARN with the ARN of your state machine
    state_machine_arn = 'arn:aws:states:us-east-1:760692866489:stateMachine:MSChatApp'
    
    # Create the Step Functions client
    step_functions = boto3.client('stepfunctions')
    
    # Start the state machine execution
    response = step_functions.start_execution(
        stateMachineArn=state_machine_arn,
        input=json.dumps(event)
    )
    
    # Log the execution ARN
    execution_arn = response['executionArn']
    print(f'Started execution with ARN: {execution_arn}')
    
    return {
        'statusCode': 200,
        'body': json.dumps('State machine execution started successfully.')
    }
