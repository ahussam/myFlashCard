# myFlashCard

A flash card app based on NodeJS. 

## Getting Started

The app is a copy of [this](https://github.com/jwasham/computer-science-flash-cards) project, which I found it fun to write it with JS. Feel free to use it as you like.  BTW, use it in your local server, **don't deploy to a live server**.

### Prerequisites

*NodeJS* 
```
sudo apt-get install nodejs
```
install *mongodb* on the OS first.

MongoDB collection name: **cards** 

Collection schema: 
* _id: IdObject
* front: string
* back: string 
* solved: int32 
* tag: string

### Installing

Everything is set just build the collection schema in MongoDB. 

Then execute the following commands: 

```
user@system:$ git clone https://github.com/ahussam/myFlashCard.git
user@system:$ cd myFlashCard
user@system:$ node myFlashCard.js
```


## Built With

* [Nodejs](https://nodejs.org/en/) - Server
* [ExpressJS](https://expressjs.com/) - The web framework 
* [Bootstrap](https://getbootstrap.com/) - Front-end framework
* [jQuery](https://jquery.com/) - JavaScript library
* [MongoDB](https://www.mongodb.com/) - NoSQL database program
* [Vash](https://www.npmjs.com/package/vash) - Template engine



## Authors

* **Abdullah Hussam** - [ahussam](https://github.com/ahussam)


## License

This project is licensed under the Apache License  - see the [LICENSE.md](LICENSE.md) file for details

## Screenshots

![myFlashCard1.png](/images/myFlashCard1.png)

![myFlashCard2.png](/images/myFlashCard2.png)


## TODO list 

- [ ] Add a Home page to show cards information. 
- [ ] Card editing feature. 

I don't think I am interested in this project anymore. So, I suggest to DIY.
