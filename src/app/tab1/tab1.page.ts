import { Component } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
 import {AlertController, ToastController, NavController} from '@ionic/angular';
import { Observable } from 'rxjs';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  unpairedDevices: any;
  pairedDevices: any;
  gettingDevices: boolean;
  d:any="jjdjdj";
  obs: Observable<any>;
  constructor(private bluetoothSerial: BluetoothSerial,
     private alertController: AlertController) {
      //  this.bluetoothSerial.disconnect();
       this.bluetoothSerial.connect('98:D3:32:70:7C:95');
        setInterval(async() => {
         this.available();}, 1000);
  //  console.log('enable  ',bluetoothSerial.enable());
  //  this.selectDevice('98:D3:32:70:7C:95')
  }
  
  startScanning() {
    this.pairedDevices = null;
    this.unpairedDevices = null;
    this.gettingDevices = true;
    const unPair = [];
    this.bluetoothSerial.discoverUnpaired().then((success) => {
      console.log(success);
      success.forEach((value, key) => {
        var exists = false;
        unPair.forEach((val2, i) => {
          if (value.id === val2.id) {
            exists = true;
          }
        });
        if (exists === false && value.id !== '') {
          unPair.push(value);
        }
      });
      this.unpairedDevices = unPair;
      this.gettingDevices = false;
    },
      (err) => {
        console.log(err);
      });
  
    this.bluetoothSerial.list().then((success) => {
      this.pairedDevices = success;
    },
      (err) => {
  
      });
    }
  
  success = (data) => {
    console.log(data);
    this.deviceConnected();
  }
  fail = (error) => {
    alert(error);
  }
  
  async selectDevice(id: any) {
  console.log('id ', id);
    const alert = await this.alertController.create({
      header: 'Connect',
      message: 'Do you want to connect with?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Connect',
          handler: () => {
            this.bluetoothSerial.connect(id).subscribe(this.success, this.fail);
          }
        }
      ]
    });
    await alert.present();
  }
 
  async available(){
    await this.bluetoothSerial.available().then(async f=>{
      console.log(f);
      this.d =  await this.bluetoothSerial.read();
      console.log();
      // this.bluetoothSerial.readUntil('\n').then(d=>{
      //  this.d= d;
      //   console.log(d);
      // });
    });
  }
  deviceConnected() {
    this.bluetoothSerial.isConnected().then(success => {
//      this.bluetoothSerial.readUntil('\n').then(d=> console.log('d ',d));
// this.bluetoothSerial.available().then(d=>console.log('dd', d));
console.log('isEnabled ',this.bluetoothSerial.isEnabled());
            alert('Connected Successfullly');
    }, error => {
      alert('error' + JSON.stringify(error));
    });
  }
  
  async disconnect() {
    const alert = await this.alertController.create({
      header: 'Disconnect?',
      message: 'Do you want to Disconnect?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Disconnect',
          handler: () => {
            this.bluetoothSerial.disconnect();
          }
        }
      ]
    });
    await alert.present();
  }
 }