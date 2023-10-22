const mainUrl = 'http://localhost:8000';

class dbRequest
{
	async userRegister(data)
	{
		const responseObject =
		{
			success: '',
			error: ''
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
				return (responseObject)
			} 
			else 
			{
				responseObject.success = false;
				responseObject.error = 'Error en el registro';
				return (responseObject)
			}
		}
		catch (error) 
		{
			responseObject.success = false;
			responseObject.error ='Error de red';
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
				const data = response.json();
				localStorage.setItem('token', data.token); // Guardar el token en el LocalStorage
				localStorage.setItem('user_name', formData.username);
				responseObject.error = null; // limpiar cualquier error previo.
				responseObject.path = "/UserView";
				return (responseObject);
			} 
			else 
			{
				const data = response.json();
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
				let data = response.json();

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

	async getLabels(audioId)
	{
		const responseObject =
		{
			results: ''
		}

		try 
		{
			const response = await fetch(`${mainUrl}/audios/${audioId}/predictions`);
			if (!response.ok) 
			{
				throw new Error('Failed to fetch predictions');
			}
			const data = response.json();
			console.log("Data from server:", data);
			responseObject.results = (data);
			return (responseObject);
		} 
		catch (error) 
		{
			console.error("There was an error fetching the predictions:", error);
		}
	}
}

export default new dbRequest();