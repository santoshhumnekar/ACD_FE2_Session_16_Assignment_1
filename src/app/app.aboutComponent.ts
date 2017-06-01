import { Component, OnInit } from '@angular/core';
@Component({
	selector: 'about',
	template: `<h1>User List</h1>
	<div class="container">
	<div class="row">
	<div><h2>Names</h2></div>
	</div>

<div *ngFor='let list of lists'>
<div class="row">
<div class="col-md-4"><b style="color:green">{{list.name}}</b></div>
</div>
</div>
</div>
	`,
})
export class AboutComponent 
	{
	public lists: any[] = [{ name: 'Noel' }, { name: 'James' }, { name: 'Robin' }];
		
		constructor() {
			
	}
	
	


}