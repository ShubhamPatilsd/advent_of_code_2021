use std::fs;

fn main(){
    let contents = fs::read_to_string("input.txt").expect("oops something wrong");
    let mut input = contents.split("\n");

    let mut depth = 0;
    let mut forward = 0;
    for line in input{
        let data: Vec<&str> = line.split(" ").collect();
        println!("{:?}", data);
        if(data.len()<2){

        }else if(data[0]=="forward"){
            forward+=data[1].parse::<i32>().unwrap();
        }else if(data[0] == "down"){
            depth+=data[1].parse::<i32>().unwrap();
        }else{
            depth-=data[1].parse::<i32>().unwrap();
        }
    }
    println!("{}", depth*forward);
}