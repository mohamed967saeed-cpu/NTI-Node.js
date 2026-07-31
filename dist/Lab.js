"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1- Enum
var AppointmentStatus;
(function (AppointmentStatus) {
    AppointmentStatus["Pending"] = "Pending";
    AppointmentStatus["Completed"] = "Completed";
    AppointmentStatus["Cancelled"] = "Cancelled";
})(AppointmentStatus || (AppointmentStatus = {}));
// Customer Object
const customer1 = {
    id: 1,
    name: "Ahmed",
    phone: "01012345678"
};
// Service Object
const haircut = {
    id: 101,
    name: "Hair Cut",
    price: 150
};
// Appointment Object
const appointment1 = {
    id: 1001,
    customer: customer1,
    service: haircut,
    status: AppointmentStatus.Pending,
    appointmentDate: "2026-08-01"
};
// Function 1
function calculatePrice(service) {
    return service.price;
}
// Function 2
function appointmentMessage(appointment) {
    return `${appointment.customer.name} booked ${appointment.service.name} (${appointment.status})`;
}
console.log(calculatePrice(haircut));
console.log(appointmentMessage(appointment1));
//# sourceMappingURL=Lab.js.map