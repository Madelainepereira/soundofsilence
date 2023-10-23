const mainUrl = 'http://localhost:8000';

class dbRequest
{
	async userRegister(data)
	{
		const responseObject =
		{
			success: '',
			error: '',
			msg: '',
			show: '',
			path: ''
		}

		try 
		{
			const response = await fetch(`${mainUrl}/register`,
			{
				method: 'POST',
				body: data,
			});
 
			if (response.ok) 
			{
				responseObject.success = true;
				responseObject.error = null;
				responseObject.msg = 'Registro exitoso';
				responseObject.show = true;
				responseObject.path = '/Login';
				return (responseObject)
			} 
			else 
			{
				responseObject.success = false;
				responseObject.error = 'Error en el registro';
				responseObject.msg = 'Error en el registro';
				responseObject.show = true;
				return (responseObject)
			}
		}
		catch (error) 
		{
			responseObject.success = false;
			responseObject.error ='Error de red';
			responseObject.msg ='Error de red';
			responseObject.show = true;
			return (responseObject)
		}
	}

	async userLogin(formData)
	{
		const responseObject =
		{
			error: '',
			path: ''
		}

		try 
		{
			const response = await fetch(`${mainUrl}/login`, 
			{
				method: 'POST',
				headers: 
				{
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					user_name: formData.username,
					password: formData.password
				})
			});
	
			if (response.ok) 
			{
				const data = await response.json();
				localStorage.setItem('token', data.token); // Guardar el token en el LocalStorage
				localStorage.setItem('user_name', formData.username);
				responseObject.error = null; // limpiar cualquier error previo.
				responseObject.path = "/UserView";
				return (responseObject);
			} 
			else 
			{
				const data = await response.json();
				responseObject.error = data.detail; // error -> respuesta servidor
				return (responseObject);
			}
		} 
		catch (err) 
		{
			responseObject.error = 'Error de red o el servidor no está disponible'; // error -> problemas de red
			return (responseObject);
		}
	}

	async audioRecord(formData, token)
	{
		const responseObject =
		{
			path: ''
		}

		try 
		{
			let response = await fetch(`${mainUrl}/audios`, 
			{
				method: 'POST',
				headers:
				{
					'Authorization': `Bearer ${token}`
				},
				body: formData
			});

			if (response.ok) 
			{
				let data = await response.json();

				responseObject.path = `/LabelResults/${data.id}`; //pasamos el id del audio al componente LabelResults
				console.log("Audio enviado para analizar:", data);
				return (responseObject);
			} 
			else 
			{
				console.error("Error al enviar el audio:", await response.text());
			}
		} 
		catch (error) 
		{
			console.error('Error al enviar el audio para analizar:', error);
		}
	}

	async fetchAudios(userId)
	{

        try 
		{
			const response = await fetch(`http://localhost:8000/user/${userId}/last_audios`);
            
            if (!response.ok) 
			{
                throw new Error('Failed to fetch audios');
            }
            
            const data = await response.json();
			console.log("Data from server:", data);
            return (data);
        } 
		catch (error) 
		{
            console.error("There was an error fetching the audios:", error);
        }
    }

	async playAudio(audioId)
	{
        try 
		{
            const response = await fetch(`${mainUrl}/audios/${audioId}`);
            
            if (!response.ok)
			{
				throw new Error('Failed to fetch audio');
			}
            const audioBlob = await response.blob();
            const newAudioElement = new Audio(URL.createObjectURL(audioBlob));

            return (newAudioElement);
        } 
		catch (error) 
		{
            console.error("Error reproduciendo el audio:", error);
        }
    }

	async deleteAudio(audioId)
	{
		const userConfirmed = window.confirm("¿Estás seguro de que deseas eliminar este audio para siempre?");
        if (!userConfirmed) return;

        try 
		{
            const response = await fetch(`${mainUrl}/audios/${audioId}`, { method: 'DELETE' });
            if (!response.ok)
			{
				throw new Error('Failed to delete audio');
			}
            window.location.reload();
        }
		catch (error)
		{
            console.error("Error eliminando el audio:", error);
        }
	}
}

export default new dbRequest();