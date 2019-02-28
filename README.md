# myGithub

A webapp to consume Github Api

## Setup:  
- Create an new OAuth App [here](https://github.com/settings/developers)
- You can now consume the API with (e.g.)  
-> User data https://api.github.com/users/leandroDCI?client_id=XXX&client_secret=YYY  
-> User repos https://api.github.com/users/leandroDCI/repos?client_id=xxxx&client_secret=yyyy  
## Requirements:
- Create a **Class** and methods
- Use Bootstrap (optional but strongly suggested)

## Features:
- When you load the app it shows a user and his/her repos  
- You can search for other users
- Feel free to implement other features (filterning, sorting, etc)


## Bonus:  

```
fetch(apiUrl)
.then(
	response => response.json()
)
.then(
	repos => repos.forEach( 
		repo => console.log(repo)
	)
)
.catch(
	err => console.log(`panic: ${err}`)
)
```
