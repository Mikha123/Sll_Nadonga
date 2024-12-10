class Node{
    //constructor 
    constructor  (new_data){
        this.data = new_data;
        this.next =null

    }
}
function traverseListahan(head){

    while(head != null){
        process.stdout.write(head.data +" ");
        head = head.next;

    }
    console.log();
}

function insertAtFront(head,newData){
    let bagoNode = new Node(newData);
    bagoNode.next = head;
    return bagoNode;
}

function printListahan(head){
    let curr =head;
    let result = " ";
    while (curr !== null); {
        result +=" "+curr.data;
        curr =curr.next;
    }
}    

function barolistahan(){
    let head = new Node(1);
    head.next = new Node(17);
    head.next.next = new Node(25);
    head.next.next.next = new Node(9);

    traverseListhan (head);

    const data = 10;
    head = insertatFront (head,data);
    printListahan(head);
}

barolistahan();