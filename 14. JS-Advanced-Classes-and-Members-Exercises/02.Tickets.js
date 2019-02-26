function ticketsManagement(ticketsArr, crit){
    let criterion = crit;
    let tickets = [];

    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    //Making array of tickets
    for (let i = 0; i < ticketsArr.length; i++) {
        let ticketTokens = ticketsArr[i].split('|');
        ticketTokens[1] = Number(ticketTokens[1]);
        tickets[i] = new Ticket(ticketTokens[0], ticketTokens[1], ticketTokens[2]);
    }

    //Sorting
    let sortedTickets;
    switch (criterion) {
        case 'destination': {
            sortedTickets = tickets.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        }
        case 'price': {
            sortedTickets = tickets.sort((a, b) => a.price - b.price);
            break;
        }
        case 'status': {
            sortedTickets = tickets.sort((a, b) => a.status.localeCompare(b.status));
            break;
        }
    }
    return sortedTickets;
}




ticketsManagement(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination');
ticketsManagement(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status');
ticketsManagement(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'price');