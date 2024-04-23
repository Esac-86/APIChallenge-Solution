import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        last_name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.username.trim()) {
            return showError('El nombre de usuario es requerido');
        }
        if (!formData.name.trim()) {
            return showError('El nombre es requerido');
        }
        if (!formData.last_name.trim()) {
            return showError('El apellido es requerido');
        }
        if (!formData.email.trim() || !isValidEmail(formData.email)) {
            return showError('Correo electrónico inválido');
        }
        if (formData.password.length < 8 || !isValidPassword(formData.password)) {
            return showError('La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un símbolo');
        }
        if (formData.password !== formData.confirmPassword) {
            return showError('Las contraseñas no coinciden');
        }

        showSuccess('¡Registro exitoso!');

        try {
            const response = await axios.post('https://authchallenge-202404.up.railway.app/user', {
                username: formData.username,
                name: formData.name,
                last_name: formData.last_name,
                password: formData.password,
                email: formData.email,
                signup_date: new Date().toISOString(),
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': 'asomJnla8=88uhn2qoij908asdKUHIUh',
                },
            });
            console.log('Registro exitoso en el servidor', response.data);
            
        } catch (error) {
            console.error('Error al enviar los datos al servidor:', error);
            showError('Error en el registro. Inténtelo de nuevo.');
        }

        setFormData({
            username: '',
            name: '',
            last_name: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/;
        return passwordRegex.test(password);
    };

    const showError = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const showSuccess = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-md shadow-md max-w-lg w-full">
                <h2 className="text-2xl text-center font-bold text-white mb-4">Registro de Usuario</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="username">Nombre de usuario</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Nombre de usuario"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="name">Nombre</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Nombre"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="last_name">Apellido</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="last_name"
                            type="text"
                            placeholder="Apellido"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="email">Correo electrónico</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="text"
                            placeholder="Correo electrónico"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="password">Contraseña</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Contraseña"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="confirmPassword">Confirmar Contraseña</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirmar Contraseña"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
                            type="submit"
                        >
                            Registrarse
                        </button>

                    </div>

                </form>
                <br />
                <div className="col-span-2 flex items-center justify-center">
                    <a className="text-white" href="/">¿Ya tienes una cuenta? Inicia Sesión</a>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default RegisterForm;
