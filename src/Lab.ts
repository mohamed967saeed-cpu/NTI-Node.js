// 1- Enum
enum AppointmentStatus {
    Pending = "Pending",
    Completed = "Completed",
    Cancelled = "Cancelled"
}

// 2- Type Alias
type HairService = {
    readonly id: number;
    name: string;
    price: number;
};

// 3- Interface
interface Customer {
    readonly id: number;
    name: string;
    phone: string;
    email?: string; // Optional Property
}

// 4- Interface
interface Appointment {
    readonly id: number;
    customer: Customer;
    service: HairService;
    status: AppointmentStatus;
    appointmentDate: string;
    notes?: string; // Optional Property
}

// Customer Object
const customer1: Customer = {
    id: 1,
    name: "Ahmed",
    phone: "01012345678"
};

// Service Object
const haircut: HairService = {
    id: 101,
    name: "Hair Cut",
    price: 150
};

// Appointment Object
const appointment1: Appointment = {
    id: 1001,
    customer: customer1,
    service: haircut,
    status: AppointmentStatus.Pending,
    appointmentDate: "2026-08-01"
};

// Function 1
function calculatePrice(service: HairService): number {
    return service.price;
}

// Function 2
function appointmentMessage(appointment: Appointment): string {
    return `${appointment.customer.name} booked ${appointment.service.name} (${appointment.status})`;
}

console.log(calculatePrice(haircut));
console.log(appointmentMessage(appointment1));