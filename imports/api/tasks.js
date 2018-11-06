import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

 
export const TasksCollection = new Mongo.Collection('tasks');


if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('tasks', function tasksPublication() {
      return TasksCollection.find( { userid: this.userId });
    });
  }

Meteor.methods({
    'tasks.insert'(task) {
 //     check(text, String);
        
   
      // Make sure the user is logged in before inserting a task
      if (! this.userId) {
        throw new Meteor.Error('not-authorized');
      }
   
      TasksCollection.insert(task);
    },
    'tasks.remove'(taskId) {
   
      TasksCollection.remove(taskId);
    },
    'tasks.update'(task) {
    
      TasksCollection.update(task._id, task);
    },
  });