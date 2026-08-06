//using for loop 
// function isprime(n){
//     if(n<=1){
//         return false;
//     }
//     for(let i = 2 ; i < n ;i++){
//        if(n%i ==0){
//         return false;
//        }
//     }
//     return true;
// }

// function print(n){
//   if(n<=0){
//     return;
//   }
//   print(n-1);
//   if(isprime(n)){
//     console.log(n);
//   }
// }
// print(5)



//using recursion 

// function isprime(i,n){
//     if(n<=1){
//     return false;
//     }
//     if(n==2){
//     return true;
//     }
//     if(n==i){
//     return true;
//     }
//      if(n%i==0){
//         return false
//      }
//      return isprime(i+1, n);
// }

// function print(n){
//   if(n<=0){
//     return;
//   }
//   print(n-1);
//   if(isprime(2,n)){
//     console.log(n);
//   }
// }
// print(100)


//maze-path 

// Online C++ compiler to run C++ program online
// #include <iostream>
// using namespace std;
// int maze(int sr, int sc, int er ,int ec){
//     if(sr>er || sc>ec) {
//         return 0;
//     }
//     if(sr==er && sc==ec){
//         return 1;
//     }
//     int rightways = maze(sr,sc+1,er,ec);//starting col
//     int downways = maze(sr+1,sc,er,ec);//starting row
//     int totalways = rightways + downways;
//     return totalways;
// }
// //we are printing the path here 
// void printpath(int sr, int sc, int er ,int ec,string s){
//      if(sr>er || sc>ec) {
//         return;
//     }
//     if(sr==er && sc==ec){
//         cout<<s<<endl;
//         return;
//     }
    
//     printpath(sr,sc+1,er,ec,s+'R');//appending the element at right 
//     printpath(sr+1,sc,er,ec,s+'D');//appending the element at down
// }
// int main() {
//     cout<<maze(0,0,1,2);
//     printpath(0,0,1,2,"");
// }