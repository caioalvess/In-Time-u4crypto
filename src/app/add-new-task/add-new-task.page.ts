import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  categories = ['Work', 'Personal', 'Home'];
  today = new Date().toLocaleString();

  taskName;
  taskPriority;
  taskCategory;
  taskDate;
  taskProgress;
  taskExecuting;

  taskObject;

  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {}

  async dismis() {
    await this.modalCtrl.dismiss(this.taskObject);
  }

  selectedCategory(index) {
    this.taskCategory = this.categories[index];
  }

  addTask() {
    this.taskObject = ({
      itemName: this.taskName,
      itemDate: new Date().toLocaleString(),
      itemPriority: this.taskPriority,
      itemCategory: this.taskCategory,
      h: '0' + 0,
      m: '0' + 0,
      s: '0' + 0,
      ms: '0' + 0,
      itemExecuting: false,
      itemId: Math.floor(Math.random() * 100000),
      itemComplete: false
    });
    this.dismis();
  }
}
