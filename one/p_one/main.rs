use std::fs;

fn main(){
    let contents = fs::read_to_string("input.txt").expect("Oop wrong");
    let mut input = contents.split("\n");
    let mut curr_high = 0;
    let mut count = 0;
    for num in input{
        let num = num.parse().unwrap();
        if(num>curr_high){
            count+=1;
        }
        curr_high = num;
    }

    println!("{}", count-1);
}