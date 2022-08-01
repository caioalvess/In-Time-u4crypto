import { AddNewTaskPage } from './../add-new-task/add-new-task.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  list = [
    {
      itemName: 'Coding',
      itemDueDate: '07-31-2022',
      itemPriority: 'high',
      itemCategory: 'Work',
      id: 1,
    },
    {
      itemName: 'Design',
      itemDueDate: '07-31-2022',
      itemPriority: 'low',
      itemCategory: 'Work',
      id: 2,
    },
    {
      itemName: 'Shopping',
      itemDueDate: '07-31-2022',
      itemPriority: 'middle',
      itemCategory: 'Work',
      id: 3,
    },
    {
      itemName: 'Workout',
      itemDueDate: '07-21-2022',
      itemPriority: 'high',
      itemCategory: 'Personal',
      id: 3,
    },
  ];

  today: number = Date.now();

  constructor(public modalCtrl: ModalController) {}

  async addTask() {
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
    });

    return await modal.present();
  };

}


