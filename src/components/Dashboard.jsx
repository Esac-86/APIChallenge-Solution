import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Dashboard = () => {
    const [userData, setUserData] = useState({
        username: '',
        name: '',
        last_name: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        const username = localStorage.getItem('username');

        const fetchUserData = async () => {
            try {
                const response = await axios.get(`https://authchallenge-202404.up.railway.app/user/${username}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-Key': 'asomJnla8=88uhn2qoij908asdKUHIUh',
                    },
                });
                setUserData(response.data);
            } catch (error) {
                console.error('Error al obtener los datos del usuario:', error);
                showError('No se pudieron cargar los datos del usuario. Inténtelo de nuevo más tarde.');
            }
        };

        if (username) {
            fetchUserData();
        }
    }, []);

    const [showEditForm, setShowEditForm] = useState(false);
    const [editedData, setEditedData] = useState({ ...userData });

    const handleEdit = () => {
        setShowEditForm(true);
    };

    const handleCancelEdit = () => {
        setShowEditForm(false);
    };

    const handleSaveEdit = async () => {
        if (
            !editedData.name.trim() ||
            !editedData.last_name.trim() ||
            !editedData.email.trim() ||
            !editedData.password.trim()
        ) {
            showError('Por favor, completa todos los campos.');
            return;
        }

        try {
            const username = localStorage.getItem('username');
            const response = await axios.patch(`https://authchallenge-202404.up.railway.app/user?username=${username}`, editedData, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': 'asomJnla8=88uhn2qoij908asdKUHIUh',
                },
            });
            setUserData(response.data);
            setShowEditForm(false);
            showSuccess('Datos actualizados correctamente.');
        } catch (error) {
            console.error('Error al actualizar los datos del usuario:', error);
            showError('No se pudieron actualizar los datos del usuario. Inténtelo de nuevo más tarde.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
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
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            {showEditForm ? (
                <div className="bg-gray-800 p-8 rounded-lg shadow-md max-w-lg w-full">
                    <h2 className="text-white font-bold text-gray-800 mb-4">Editar Datos</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label className="block text-white font-semibold mb-1" htmlFor="name">Nombre:</label>
                            <input
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
                                type="text"
                                id="name"
                                name="name"
                                value={editedData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white font-semibold mb-1" htmlFor="last_name">Apellido:</label>
                            <input
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
                                type="text"
                                id="last_name"
                                name="last_name"
                                value={editedData.last_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white font-semibold mb-1" htmlFor="email">Correo Electrónico:</label>
                            <input
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
                                type="email"
                                id="email"
                                name="email"
                                value={editedData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white font-semibold mb-1" htmlFor="password">Contraseña:</label>
                            <input
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
                                type="password"
                                id="password"
                                name="password"
                                value={editedData.password || ''}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex justify-end col-span-2">
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
                                onClick={handleSaveEdit}
                            >
                                Guardar
                            </button>
                            <button
                                className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-gray-300"
                                onClick={handleCancelEdit}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-gray-800 p-8 rounded-lg shadow-md max-w-lg w-full">
                    <h2 className="text-white font-bold text-white mb-4">Datos de {userData.username}</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <p className="text-white font-semibold mb-1">Nombre:</p>
                            <p className="text-white">{userData.name}</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-white font-semibold mb-1">Apellido:</p>
                            <p className="text-white">{userData.last_name}</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-white font-semibold mb-1">Correo Electrónico:</p>
                            <p className="text-white">{userData.email}</p>
                        </div>
                        <div className="flex justify-end col-span-2">
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
                                onClick={handleEdit}
                            >
                                Editar
                            </button>
                        </div>
                        
                    </div>
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default Dashboard;
