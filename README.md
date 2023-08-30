# Caikeduo
This is a sample ABP Framework based web application to demo the power of the framework that allow rapid full stack development. the application uses Angular as frontend and .NET Core 7.0 as backend technology and MySql as database. 
The application adds entity and services that inherit ABP domain and services that allows rapidly development of CRUD services and from there 0 line of code is needed to generated web api for basic domain query and persistence.
In addition, the ABP cli allows developer to use commands to generate Typecript based entities and Angular proxy code base on the derived ABP domain, frontend can make the backend calls base on these auto generated code that will save half of work needed to develop frontend.

Instruction for Deployment: Everything are dockerized!!
Prerequisite: docker and docker compose
in Linux environment, run installupgrade.sh to install the application and db docker containers
Navigate to http://localhost:4200 and start to navigate the web site.
