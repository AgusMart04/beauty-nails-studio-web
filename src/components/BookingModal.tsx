import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, User, Phone, Mail, Check } from "lucide-react";
import { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    notes: ""
  });

  const services = [
    "Uñas acrílicas",
    "Semipermanente", 
    "Uñas de gel",
    "Pedicura spa",
    "Diseño de cejas",
    "Micropigmentación",
    "Peinados para eventos",
    "Maquillaje profesional",
    "Masajes reductivos"
  ];

  const timeSlots = [
    "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
    "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo functionality - just show success message
    alert("¡Reserva simulada con éxito! (Esta es una demo)");
    onClose();
  };

  // Handle phone input validation
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers, spaces, +, -, (, )
    const phoneRegex = /^[0-9+\s\(\)-]*$/;
    if (phoneRegex.test(value)) {
      setFormData({ ...formData, phone: value });
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-soft-black/60 backdrop-blur-sm"
        />
        
        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-background rounded-2xl shadow-glow max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="sticky top-0 bg-background border-b border-border p-6 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-nude-pink flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">Reservar Cita</h3>
                  <p className="font-body text-sm text-muted-foreground">Selecciona fecha y servicio</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-foreground" />
              </button>
            </div>
          </div>

          {/* Content */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column - Date & Service Selection */}
              <div className="space-y-6">
                {/* Date Selection */}
                <div>
                  <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    Fecha preferida
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-gold focus:outline-none transition-colors font-body"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Time Selection */}
                <div>
                  <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground mb-3">
                    <Clock className="w-4 h-4" />
                    Hora preferida
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`px-3 py-2 rounded-lg border text-sm font-body transition-all ${
                          selectedTime === time
                            ? "border-gold bg-primary text-primary-foreground"
                            : "border-border hover:border-gold/50 hover:bg-secondary"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-3 block">
                    Servicio deseado
                  </label>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {services.map((service) => (
                      <label
                        key={service}
                        className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-gold/50 hover:bg-secondary cursor-pointer transition-all"
                      >
                        <input
                          type="radio"
                          name="service"
                          value={service}
                          checked={selectedService === service}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="w-4 h-4 text-primary border-gold focus:ring-gold"
                        />
                        <span className="font-body text-sm text-foreground">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="space-y-4">
                <div>
                  <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground mb-2">
                    <User className="w-4 h-4" />
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-gold focus:outline-none transition-colors font-body"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground mb-2">
                    <Phone className="w-4 h-4" />
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-gold focus:outline-none transition-colors font-body"
                    placeholder="+34 XXX XXX XX XX"
                    required
                    pattern="[0-9+\s\(\)-]+"
                    title="Solo números, espacios y símbolos (+, -, (, ))"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground mb-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-gold focus:outline-none transition-colors font-body"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">
                    Notas adicionales
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-gold focus:outline-none transition-colors font-body resize-none"
                    rows={4}
                    placeholder="Alguna preferencia o comentario..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 pt-4 border-t border-border">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 rounded-xl border border-border hover:bg-secondary font-body text-sm font-medium transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-body text-sm font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                Confirmar Reserva (Demo)
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
