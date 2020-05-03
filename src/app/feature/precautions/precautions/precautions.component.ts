import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-precautions',
  templateUrl: './precautions.component.html',
  styleUrls: ['./precautions.component.css']
})
export class PrecautionsComponent implements OnInit {

  precautions: string[] = [
    `Clean your hands often,Use soap and water, or an alcohol-based hand rub`,
    `Don’t touch your eyes, nose or mouth,cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze`,
    `If you have a fever, a cough, and difficulty breathing, seek medical attention`,
    `Call in advance. Follow the directions of your local health authority`,
    `Stay home!!, Maintain a safe distance from anyone who is coughing or sneezing`,
  ];
  precautionNote = `Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided
  by your local public health agency.`;

  constructor() { }

  ngOnInit(): void {

  }

}
