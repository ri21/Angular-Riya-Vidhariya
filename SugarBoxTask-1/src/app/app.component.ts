import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  demoForm: FormGroup;
  outputString: string;

  ngOnInit(): void {
    this.demoForm = new FormGroup({
      'input': new FormControl()
    });

    this.demoForm.controls['input'].valueChanges.subscribe(value => {
      this.outputString = value;
    });
  }
}
