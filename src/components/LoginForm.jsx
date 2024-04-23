import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const requestBody = new URLSearchParams();
            requestBody.append('grant_type', 'password');
            requestBody.append('username', formData.username);
            requestBody.append('password', formData.password);

            const response = await axios.post('https://authchallenge-202404.up.railway.app/user/auth', requestBody.toString(), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'X-API-Key': 'asomJnla8=88uhn2qoij908asdKUHIUh',
                },
            });

            localStorage.setItem('accessToken', response.data.access_token);
            localStorage.setItem('username', formData.username);

            navigate(`/dashboard`);
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            showError('Credenciales inválidas. Inténtelo de nuevo.');
        }
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

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-md shadow-md max-w-lg w-full">
                <h2 className="text-2xl text-center font-bold text-white mb-4">Inicio de Sesión</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                    <div className="mb-4 flex items-center justify-center">
                        <img src="/fake-logo.png" alt="Fake Logo" className="mb-4" style={{ width: 'auto', height: '130px' }} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="username">Nombre de usuario</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username"
                            type="text"
                            placeholder="Nombre de usuario"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="password">Contraseña</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password"
                            type="password"
                            placeholder="Contraseña"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-span-1 flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
                            type="submit"
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                </form>
                <br />
                <div className="col-span-2 flex items-center justify-center">
                    <a className="text-white" href="/register">¿No tienes una cuenta? Regístrate</a>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default LoginForm;
