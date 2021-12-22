
import { Component } from "@angular/core";

@Component({
    selector: 'ap-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {

    newPost = " ";
    enteredValue = "";
    onAddMpost(){
        this.newPost =this.enteredValue;
        // console.dir(postInput.value);
    }
}