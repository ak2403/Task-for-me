import axios from 'axios';
import { GETALLISSUES, GETDETAILEDISSUE } from '../types/tasks';

let sample = [
    {
      "_id": "5bad791beab960d620730233",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Sun Sep 07 1975 18:25:36 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Tue Dec 17 2013 16:47:15 GMT+1100 (Australian Eastern Daylight Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b18c50fb284272955",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Mon Oct 24 1994 10:56:03 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "in-development",
      "updated_on": "Sat Sep 26 1992 03:20:15 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791bf634c754071d8d58",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Wed May 22 1985 20:37:09 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Tue Dec 13 2005 03:36:31 GMT+1100 (Australian Eastern Daylight Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791bc854cad46f46bb19",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Sat Jan 19 2013 23:30:08 GMT+1100 (Australian Eastern Daylight Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "dev-completed",
      "updated_on": "Sun Aug 18 1985 21:32:23 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791bf38b752810104c17",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Sat Aug 20 2011 01:27:06 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "re-open",
      "updated_on": "Mon Aug 22 2005 13:55:25 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b57207c40b096f07c",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Thu Mar 06 1986 00:02:42 GMT+1100 (Australian Eastern Daylight Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "in-development",
      "updated_on": "Fri Dec 05 1997 14:09:57 GMT+1100 (Australian Eastern Daylight Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b0754c3378217550e",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Mon Apr 27 2015 11:25:06 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Sat Apr 10 1999 08:18:33 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791beb0ac67ad91ed159",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Fri Feb 26 1971 08:48:17 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "in-development",
      "updated_on": "Mon Oct 21 2002 12:03:27 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b9aca11afe4ecb479",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Mon Oct 23 1989 02:51:31 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "re-open",
      "updated_on": "Sat Oct 04 2003 21:45:21 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b7f7408e9d3fac89e",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Thu Jan 09 2003 02:24:30 GMT+1100 (Australian Eastern Daylight Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "dev-completed",
      "updated_on": "Wed May 13 1992 00:30:27 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b75488b24b6dc3e18",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Fri Sep 28 1973 14:51:52 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "re-open",
      "updated_on": "Thu Jan 17 2002 08:11:48 GMT+1100 (Australian Eastern Daylight Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b951c15b0382be156",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Wed Oct 24 2001 19:05:08 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "in-development",
      "updated_on": "Fri Aug 12 1988 04:53:49 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b30c98f84f14d9f95",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Wed Mar 23 1983 00:54:33 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "dev-completed",
      "updated_on": "Fri Sep 23 1988 23:31:37 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b216a1d73e9521c11",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Fri Dec 21 2001 23:57:38 GMT+1100 (Australian Eastern Daylight Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "in-development",
      "updated_on": "Thu Sep 30 1971 13:07:32 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b27fbb4b851f914f9",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Fri Jul 11 1980 02:48:50 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Mon Jun 29 2009 23:29:45 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791bdf33304d0d4da9a4",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Tue Mar 31 1987 10:27:48 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "dev-completed",
      "updated_on": "Mon Sep 23 2013 14:39:47 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b18ff20634d4fc55f",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Thu Feb 16 1995 08:03:50 GMT+1100 (Australian Eastern Daylight Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Wed Jul 13 2016 07:13:02 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b95f90677555943d8",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Mon Jun 05 2017 23:45:10 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Thu Jun 24 1976 09:08:31 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b233acb0accc3f9bb",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Mon Feb 10 2014 03:00:46 GMT+1100 (Australian Eastern Daylight Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "dev-completed",
      "updated_on": "Wed Feb 08 1978 05:26:15 GMT+1100 (Australian Eastern Daylight Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791baee8c36a3bff4a14",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Thu Jul 05 1984 21:17:27 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "re-open",
      "updated_on": "Thu Nov 15 1984 21:34:19 GMT+1100 (Australian Eastern Daylight Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791bf8f1ece65002732e",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Sat May 28 2005 11:17:18 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "dev-completed",
      "updated_on": "Fri Dec 08 1989 15:07:09 GMT+1100 (Australian Eastern Daylight Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b1f8777d680cdcb3c",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Mon Apr 23 1979 12:48:57 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Tue Jan 10 2017 15:44:52 GMT+1100 (Australian Eastern Daylight Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b0732f57df1f625b4",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Wed Mar 16 1977 22:52:10 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Wed May 27 1970 05:24:51 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b01a22578969c6d3a",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Sun Mar 22 1970 12:41:22 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Fri Sep 07 1990 02:07:33 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b3187f812587a22be",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Sun Feb 24 1985 17:51:10 GMT+1100 (Australian Eastern Daylight Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Mon Apr 11 2016 05:11:07 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b78884c6c330c9774",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Tue May 08 1979 21:00:04 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Thu Sep 08 2016 18:09:07 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b79af2521f33051ca",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Fri Aug 03 2012 02:23:41 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Sat Jun 25 2005 16:28:20 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b836c87a0c673e3b7",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Mon Jul 05 2010 08:32:40 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Wed Oct 10 2007 15:58:20 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791bdb50623c28053ed4",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Fri Aug 17 1979 00:33:32 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Fri Oct 10 1980 00:34:25 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791bff9e50de2b58f840",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Sun Nov 06 2005 03:46:07 GMT+1100 (Australian Eastern Daylight Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Wed Mar 13 1985 04:41:46 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791bdf8618faecb45ba4",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Sat Feb 26 1994 20:39:48 GMT+1100 (Australian Eastern Daylight Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Wed Apr 17 1996 00:14:31 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b1ff189851cb8e7a6",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Wed Jan 27 1982 08:23:32 GMT+1100 (Australian Eastern Daylight Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Mon Aug 20 2012 21:52:01 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b1f577c407d5a6fd7",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Mon Sep 13 1993 09:54:53 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Mon Jul 24 1972 15:13:39 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b2d1ae61a7604f4a2",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Thu Sep 17 1981 13:06:38 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Sun Feb 06 2005 03:24:36 GMT+1100 (Australian Eastern Daylight Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791bc082f1f8c05d6536",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Tue Jan 07 1975 03:16:33 GMT+1100 (Australian Eastern Daylight Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Mon Oct 31 2011 13:40:00 GMT+1100 (Australian Eastern Daylight Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b957318c17a299833",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Tue Mar 05 2013 05:31:58 GMT+1100 (Australian Eastern Daylight Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Fri Aug 09 1991 08:48:42 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791ba8fbbbfe10b8c327",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Sun Jan 16 1972 00:51:53 GMT+1100 (Australian Eastern Daylight Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Tue Jun 30 1998 14:30:44 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b3d08f5373dc3a8bb",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Mon Oct 27 1986 06:04:51 GMT+1100 (Australian Eastern Daylight Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Tue Dec 02 1986 05:10:22 GMT+1100 (Australian Eastern Daylight Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b3dfb581052ca8b6a",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Fri Oct 01 1976 07:58:51 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Wed May 18 1988 14:48:03 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791bf22ed40ad39eb241",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Sat Apr 17 1982 19:22:54 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Wed Sep 09 2009 19:55:21 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791b0be0ec9cc59e4de2",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Tue May 08 2001 10:27:20 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Wed Jul 02 2014 00:33:30 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791bde842e6e0dd562f2",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Thu Apr 13 2006 09:10:18 GMT+1000 (Australian Eastern Standard Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Tue Oct 01 1996 10:39:40 GMT+1000 (Australian Eastern Standard Time)",
      "fix_version": "V2"
    },
    {
      "_id": "5bad791bc10ba9ac1424c37f",
      "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
      "description": "s been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "created_on": "Fri Jan 08 2016 16:47:44 GMT+1100 (Australian Eastern Daylight Time)",
      "assignee": "Arun Kumar",
      "reporter": "Aishwarya Kannan",
      "status": "to-do",
      "updated_on": "Thu Nov 18 1971 02:13:57 GMT+1100 (Australian Eastern Daylight Time)",
      "fix_version": "V2"
    }
  ]

export const addNewIssue = (newissue) => {
    return (dispatch) => {
        axios.post('http://localhost:5000/tasks/new-issue', newissue, { headers: { 'Content-Type': 'application/json' } })
    }
}

export const getTotalIssues = () => {
    return (dispatch) => {
        // axios.get('http://localhost:5000/tasks/get-issues')
        //     .then(response => {
                dispatch({
                    type: GETALLISSUES,
                    payload: sample
                })
    //         })
    }
}

export const getDetailedIssue = (ID) => {
    return (dispatch) => {
        // axios.get(`http://localhost:5000/tasks/${ID}`)
        //     .then(response => {
                dispatch({
                    type: GETDETAILEDISSUE,
                    payload: sample[0]
                })
            // })
    }
}

export const filterTask = (filterData) => {
    return (dispatch) => {
        // axios.post('')
    }
}