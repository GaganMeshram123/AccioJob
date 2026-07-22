// //simple ahe means 
// Node * Temp = new Node();//new linkedinlist banala
// //after this 
// while(Temp != NULL){//tmep data print karun 
//     cout<<Temp->data<<" ";
//     Temp = Temp->next;
// }
// //samor samor print honar 
// //this will help either 

// 2 adding the element 
// // how i can add the elements int he front 
// Node * First = new Node;
// //node has beem created
// First->data = 5;//data 
// first->next = head;
// head = First 

//insert at the end 
// Node *TEMP = new Node;
// while(TEMP->next != NULL){
//     //we can add the elements 
//     temp->data = 3;
//     temp = temp->next 
// }

//like we can delete like first assign karun 
//and then apan delte karunn 

// Node *LIST = new Node;
// //top most elemet la jr apan boltoy 
// //ki you should remove then i have to assign it as the head 
// Node * temp = head ;
// head = head->next //next node should be print thike 
// delete *temp;

//length 
// int count  = 0 ;
// Node * temp = head;

// while(temp){
//    count++;
//    temp = temp->next; //why these condtition is compulsory 
// }
// return count ;
// // these is how you can easily like by count variable

// int non = 0 ;
// //and i have to find this element in the element 
// Node *key = head;
// while(key){
//     if(key->data ==non){
//         //like we have to search this in thse data 
//         return true;
//         key = key->next;
//     }
//     return false ;
// }

// //for each step we have to return this 

//reverse 


// Node* prev = NULL;
// Node* curr = head;

// while(curr){

//     Node* next = curr->next;

//     curr->next = prev;

//     prev = curr;

//     curr = next;
// }

// head = prev;



//linkedin list madhe reverse karych 
//node banava
//store kara element
//push karaa to the new node 

//Node * gagan = head;
//while(gagan){
// gagan->next = curr;
// curr = prev;
// prev = gagan.next
//return prev;
//
