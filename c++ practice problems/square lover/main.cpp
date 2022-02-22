#include<iostream>
#include <vector>
using namespace std;
int fun(double a){
    double sum = 0;
    while(a){
        sum = sum + a%10;
        a = a/10;
    }
    return sum;
}
int main(){
    
    // write your code here
   double l,r,count = 0;
   cin>>l>>r;
   for(double i = l; i<=r; i++){
       for(double j=1; j<=fun(i); j++){
           if(j*j == fun(i)) count++;
       }
   }
   cout<<count<<endl;
    return 0;
}