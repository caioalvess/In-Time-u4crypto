import { AddNewTaskPage } from './../add-new-task/add-new-task.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchTerm: string;
  list = [];

  hour: any = '0' + 0;
  min: any = '0' + 0;
  sec: any = '0' + 0;
  milliSec: any = '0' + 0;

  startTimer: any;
  running = false;

  today: number = Date.now();

  constructor(public modalCtrl: ModalController) {}

  async addTask() {
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage,
    });

    modal.onDidDismiss().then((newTaskObj) => {
      if (
        !newTaskObj.data?.itemName ||
        !newTaskObj.data?.itemPriority ||
        !newTaskObj.data?.itemCategory
      ) {
        return;
      } else {
        this.list.push(newTaskObj.data);
      }
    });

    return await modal.present();
  }

  complete(item) {
    console.log(item);
    item.itemComplete = true;
    clearInterval(item.itemProgress);
  };

  delete(index) {
    this.list.splice(index, 1);
  };

  start(it) {
    if(!this.running && !it.itemComplete) {
      this.running = true;
    this.startTimer = setInterval(() => {
      if (this.hour === '06') {
        this.stopProgressDay();
      }
      this.milliSec++;
      this.milliSec = this.milliSec < 10 ? '0' + this.milliSec : this.milliSec;

      if (this.milliSec === 100) {
        this.sec++;
        this.sec = this.sec < 10 ? '0' + this.sec : this.sec;
        this.milliSec = '0' + 0;
      }

      if (this.sec === 60) {
        this.min++;
        this.min = this.min < 10 ? '0' + this.min : this.min;
        this.sec = '0' + 0;
      }

      if (this.min === 60) {
        this.hour++;
        this.hour = this.hour < 10 ? '0' + this.hour : this.hour;
        this.min = '0' + 0;
      }
    }, 10);
    }

    this.list.forEach((item, index) => {
      if (item !== it) {
        item.itemExecuting = false;
        clearInterval(item.itemProgress);
      } else {
        item.itemExecuting = true;

        item.itemProgress = setInterval(() => {
          item.ms++;
          item.ms = item.ms < 10 ? '0' + item.ms : item.ms;

          if (item.ms === 100) {
            item.s++;
            item.s = item.s < 10 ? '0' + item.s : item.s;
            item.ms = '0' + 0;
          }

          if (item.s === 60) {
            item.m++;
            item.m = item.m < 10 ? '0' + item.m : item.m;
            item.s = '0' + 0;
          }

          if (item.m === 60) {
            item.h++;
            item.h = item.h < 10 ? '0' + item.h : item.h;
            item.m = '0' + 0;
          }
        }, 10);
      }
    });
  }

  stopProgressDay() {
    clearInterval(this.startTimer);
    this.running = false;
  }

  stop(it) {
    it.itemExecuting = false;
    clearInterval(it.itemProgress);
  }
}
