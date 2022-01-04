# Recoil Folder Summary

## Purpose

The recoil folder is used to store **atoms** (shared pieces of state that can be accessed throughout the entire front-end application) and **selectors** (used to access a piece of a state). 

## Developer Note

If the function is used to update a particular field of the user/group state, then create a new selector file within the **selectors** folder.

When creating a selector, MAKE SURE TO INCLUDE A KEY or else the selector will mess up the entire recoil state. Please refer to the current selectors as examples.
