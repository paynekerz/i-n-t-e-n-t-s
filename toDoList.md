
---
DONE
---

> [Z] DEPLOY TO HEROKU



> [Z&J] SIGNUP PAGE WORKING



> [Z&J] LOGIN PAGE WORKING



> [Z] HEADER LINKS NAVBAR LINKS WORK
    
   > [Z&J] SIGNOUT NAVBAR LINK
    
   > [Z] SEARCH PAGE NAVBAR LINK
    
   > [Z] USER BLOG NAVBAR LINK

   > [Z] HOME NAVBAR LINK REFAC

   * [P] UI LETS USER INPUT INFORMATIO AND MAKE A SEARCH << PRIORITY !!!

   * [J&P&Z] SEARCH TO API

   * [Z] INFO PAGE LINKS TO BLOG FOR SELECTED PARK 

   * [J] db/server refactor

---
TO DO
---



* NEEDS 
* wants



*** SEARCH PAGE ***  << started to remake mutations resolvers and typedefs for Park and BlogPost, no errs from them at the  moment

    *** 1 USER CAN MAKE POST ON THE BLOG AND INFO PAGE AND WILL ONLY SEE IT ON THAT PARKS PAGE
    
    2 PARK BLOG AND INFO PAGE WILL SHOW ALL POSTS ASSOCIATED WITH PARK
    
    3 SEARCH PAGE DISPLAYS NAME, LON, LAT, ADDRESS, IMAGE 


add park id to mutuion typdefs model resolvers for blog post save 

query by park id 

* HOME PAGE

    > [Z] HOME REDIRECTS TO LOGIN IF NOT LOGGED IN

    * SPLASH IMAGE OR PLACEHOLDERS FOR AFFILIATE MARKETING



* [R&Z] ADJUST CSS

    * USE COLORS 
        lightgreen #718161, darkgreen #314131, grey #202020, yellow #E0A100
        
    * USE FONT
        https://fonts.google.com/specimen/Saira+Stencil+One



* PRESENTATION



* FINAL README



* [Z] troubleshoot heroku



* all users post appear in their profile page also

* user profile page
    * user can delete their account
    * view posts and parks the they are linked to
    * make posts without a park association
    * friend list, favorite parks
    * trail name and trail name voting

* thoughts refactor to blog

* posts can display images from a URL -like posts on discord or fb




# inTents

## Description

Am online blog to track and post about national parks across the United States. 

## User Story

```
AS A USER
I WANT to search for a national park
SO THAT I can save that park to my account
I WANT to create a blog post for a park
SO THAT I can review that particular park
```

## Wireframe

![Screenshot of Wireframe](Assets/intents-wireframe.PNG)

## API

National Park Service API [Link](https://www.nps.gov/subjects/developer/api-documentation.htm)