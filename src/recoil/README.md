# Recoil Folder Summary

## Purpose

The recoil folder is used to store the **firebase database queries** (located under the DBQueries folder), **atoms** (shared pieces of state that can be accessed throughout the entire front-end application), **selectors** (used to access a piece of a state), and **testButtons** (used to test out database queries).

## Developer Note

Please be sure to put all the database query functions at the root level of the **recoil** folder. If the function is used to update a particular field of the user/group state, then append the function to the selectors.js file located in the **selectors** folder.

When developing the database queries, please put a comment at the top of the file to indicate the **purpose** of the query, **how it works**, **inputs**, **outputs/expected results**. This will help streamline the development process and ensure we don't forget how our code works. :)

All the database queries can be viewed here: <https://docs.google.com/document/d/1khOIhWv6MfOnDU_hCHNSzwk2T4RD_K9_AH2XeMJr1zQ/edit>
