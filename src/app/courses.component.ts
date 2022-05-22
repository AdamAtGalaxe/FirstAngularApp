import { Component } from "@angular/core";
import { inject, TestBed } from "@angular/core/testing";
import { CoursesService } from "./course/courses.services";



@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
    //styleUrls: ['./courses.component.css']
})
export class CoursesComponent{
    title = "List of courses";
    imgURL = "https://picsum.photos/525/200"
    colSpan: number = 2;
    isActive = true;
    courses: Array<string>;//: [String];
    //CoursesComponent()
    email: string = "Adam";
    longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum eleifend ultricies. Integer suscipit odio quis ipsum molestie pharetra. Morbi porta dignissim tellus vitae sollicitudin. Aenean vel efficitur turpis. Morbi auctor posuere purus non molestie. Fusce pretium porta eros, eget.";
    title2: string = "noThing Entered yet";

    course = {
        title: "Dating Kim K, or How to get killed by Kanye",
        rating: 4.9798,
        students: 65,
        price: 12960.99,
        releaseDate: new Date(2022, 6, 1)
    }
    
    
    constructor(service:CoursesService){
        let vard: number = 2;
        this.courses = service.getCourses();
    }
    onSave(event: MouseEvent) {
        console.log(event);
        event.stopPropagation();

        if(this.isActive) this.isActive = false;
        else this.isActive = true;
    }
    onDiv(){
        console.log("Div Clicked");
    }

    onKeyUpOld(event: KeyboardEvent){
        if(event.key==="Enter") console.log("here")
    }
    onKeyUp(){
        console.log("here")
    }
    getValueOld(event: Event){
        console.log((event.target as HTMLInputElement).value)

    }
    getValue(myVar: String){
        console.log(myVar)

    }
    getObjValue(){
        console.log(this.email)

    }
}