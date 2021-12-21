
import { Component } from "@angular/core";

@Component({
    selector: 'ap-post-create',
    templateUrl: './post-create.component.html',
})
export class PostCreateComponent {

    newPost = " ";
    enteredValue = "";
    onAddMpost(){
        this.newPost =this.enteredValue;
        // console.dir(postInput.value);
    }
}