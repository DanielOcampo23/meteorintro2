import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
 
export const TasksCollection = new Mongo.Collection('tasks');

Meteor.methods({
  'tasks.insert'(task) {
    //check(text, String);

 
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    TasksCollection.insert(task);
  },
  'tasks.remove'(taskId) {
 
    TasksCollection.remove(taskId);
  },
  'tasks.setChecked'(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);
 
    TasksCollection.update(taskId, { $set: { checked: setChecked } });
  },
});