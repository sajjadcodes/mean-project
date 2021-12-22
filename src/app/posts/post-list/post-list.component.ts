import { Component } from "@angular/core";

@Component({
    selector:'post-list',
    styleUrls: ['./post-list.component.css'],
    templateUrl: './post-list.component.html',

})
export class postListComponent{


    posts = [
       {title: "post one title", content:"post one content here"},
       {title: "post two title", content:"post two content here"},
       {title: "post three title", content:"post three content here"},
       {title: "post four title", content:"post four content here"}
    ]

    // posts = [];
}