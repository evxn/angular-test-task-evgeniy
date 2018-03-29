# Angular Test task 

## Demo (responsive) http://evgn.ml/angular-test-task-evgeniy/
 
I implemented it as a list of dynamically created components (each can be with different behavior but still share some presentation logic). Works with AOT compilation. Demo built with --environment=dev to use mocked services.

    ng build --prod --environment=dev --bh=/angular-test-task-evgeniy/

### Where to look first

* [App Module](/src/app/app.module.ts)
* [Case Wall Container](/src/app/components/case-wall-container)
* [Case Wall Component](/src/app/components/case-wall)
* [Case Wall Item](/src/app/components/case-wall-item)

## Task Details

### Provided Mockups

![Provided mockups](/task/design.png?raw=true)

### Provided Notes
* Attached [C# Data-Model](/task/DataModel.cs) – please convert it to TypeScript.
* Mock service file (angular) – provide mock data according to the Data Model.
* Create user service that get User-Id from the model and return user image
