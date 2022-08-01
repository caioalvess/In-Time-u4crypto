import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {

  categories = [];

  // taskName
  // taskDate
  // taskPriority
  // taskCategory

  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {
  }

  async dismis() {
    await this.modalCtrl.dismiss();
  };

}
