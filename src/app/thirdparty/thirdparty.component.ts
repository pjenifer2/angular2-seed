import { Component } from '@angular/core';


@Component({
    selector: 'thirdparty',
    templateUrl: './thirdparty.component.html'
})

export class ThirdPartyComponent {
    startDate = new Date('Jan 1 2017');
    onOffSwitch = 'On';
}