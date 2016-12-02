import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  books: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, angFire: AngularFire) {
    this.books = angFire.database.list('/Books');
  }

  addBook():void {
    let prompt = this.alertCtrl.create({
      title: 'Book Title and Author',
      message: 'Enter the books title and author',
      // This is where we add the input fields for our popup modal
      inputs: [
        {
          name: 'title',
          placeholder: "Book Title"
        },
        {
          name: 'author',
          placeholder: "Author's name"
        }
      ],

      //now we'll add the buttons to cancel and save our changes that we make in the modal
      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log("cancel clicked");
          }
        },
        {
          text: "Save Book",
          handler: data => {
            this.books.push({
              title: data.title,
              author: data.author
            })
          }
        }
      ]
    });

    prompt.present();
  }
  
  
  editBook(book):void {
    let prompt = this.alertCtrl.create({
      title: 'Edit Book',
      message: 'Edit the book title and author',
      inputs: [
        {
          name: 'title',
          placeholder: book.title
        },
        {
          name: 'author',
          placeholder: book.author
        }
      ],
      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log("cancel clicked");
          }
        },
        {
          text: "Save Book",
          handler: data => {
            let newTitle:String = book.title;
            let newAuthor:String = book.author;

            if(data.title != ''){
              newTitle = data.title;
            }

            if(data.author != ''){
              newAuthor = data.author;
            }

            this.books.update(book.$key, {
              title: newTitle,
              author: newAuthor
            })
          }
        }
      ]
    });

    prompt.present();
  }

  deleteBook(bookID):void {
    let prompt = this.alertCtrl.create({
      title: 'Delete Book',

      //now we'll add the buttons to cancel and save our changes that we make in the modal
      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log("cancel clicked");
          }
        },
        {
          text: "Delete Book",
          handler: data => {
            this.books.remove(bookID);
          }
        }
      ]
    });

    prompt.present();
  }


}
