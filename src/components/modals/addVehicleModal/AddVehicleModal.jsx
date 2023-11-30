import { MdAirlineSeatIndividualSuite, MdClear } from "react-icons/md";

import { useVehicleModalStore } from "../../../store/vehicleModalStore";

import { useForm } from 'react-hook-form'

export const AddVehicleModal = () => {
    const { showVehicleModal, showVehicleModalClass, hideVehicleModal } = useVehicleModalStore();
    const { register, handleSubmit, formState: { errors }, watch, setValue, reset } = useForm({
        defaultValues: {
            nombre: 'Gonza',
            correo: 'text@text.com'
        }
    });

    console.log(errors)

    const handleClick = () => {
        hideVehicleModal();
    }
    return (
        <section className={`vehicle-modal ${showVehicleModal ? 'is-active' : ''}`}>
            <div className={`vehicle-modal__background ${showVehicleModalClass}`}></div>
            <section className={`vehicle-modal-card ${showVehicleModalClass}`}>
                <header className="vehicle-modal-card-header">
                    <span>Añadir vehículo</span>
                    <div className='vehicle-modal-close' onClick={handleClick} role="button" aria-label="Close sidebar">
                        <MdClear className="vehicle-modal-close__icon" />
                    </div>
                </header>
                <div className="vehicle-modal-card-body">
                    {/* <form onSubmit={handleSubmit((data) => {
                        console.log(data);
                        reset()
                    })}>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" {...register('nombre', {
                            required: {
                                value: true,
                                message: 'Nombre es requerido'
                            },
                            minLength: {
                                value: 2,
                                message: 'Nombre debe tener al menos 2 caracteres'
                            },
                            maxLength: {
                                value: 20,
                                message: 'Nombre debe tener máximo 20 caracteres'
                            }
                        })}/>
                        {
                            errors?.nombre && <span>{errors.nombre.message}</span>
                        }
                        <label htmlFor="correo">Correo</label>
                        <input type="email" {...register('email', {
                            required: {
                                value: true,
                                message: 'Correo es requerido'
                            },
                            pattern:{
                                value: /^[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,4}$/,
                                message: 'Correo no válido '
                            }
                        })}/>
                        <label htmlFor="password">Password</label>
                        <input type="password" {...register('password', {
                            required: true
                        })}/>
                        <label htmlFor="confirm-password">Confirm password</label>
                        <input type="password" {...register('confirmPassword', {
                            required: {
                                value: true,
                                message: 'confirmar password es requerido'
                            },
                            validate: (value) => {
                                if(value === watch('password')){
                                    return true;
                                }else{
                                    return 'Las contraseñas no coinciden'
                                }
                            }
                        })}/>
                        {
                            errors?.confirmPassword && <span>{errors.confirmPassword.message}</span>
                        }
                        <label htmlFor="fecha-fabricacion">Fecha fabricación</label>
                        <input type="date" {...register('date', {
                            required:{
                                value: true,
                                message: 'Fecha de fabricación es requerida'
                            },
                            validate: (value) => {
                                const fechaFabricacion = new Date(value);
                                const fechaActual = new Date();

                                const edad = fechaActual.getFullYear() - fechaFabricacion.getFullYear()

                                if(edad >= 18){
                                    return true
                                }else{
                                    return 'Debe ser mayor de edad'
                                }
                            }
                        })} />
                        {
                            errors?.date && <span>{errors.date.message}</span>
                        }
                        <label htmlFor="pais">País</label>
                        <select name="pais" id="pais" {...register('pais')}>
                            <option value="mx">México</option>
                            <option value="co">Colombia</option>
                            <option value="ar">Argentina</option>
                        </select>
                        <button>Enviar</button>
                    </form> */}
                    <form id='addVehicleForm' className="add-vehicle-form">
                        <label htmlFor="vehicleName" className='add-vehicle-form__label'>Nombre del vehículo</label>
                        <input type="text" className='add-vehicle-form__input' placeholder="Introduce un nombre para tu vehículo" />
                        <div className="add-vehicle-form-input-group">
                            <div className="grow-1">
                                <label htmlFor="vehicle" className='add-vehicle-form__label'>Vehículo</label>
                                <select name="vehicle" id="vehicle" className='add-vehicle-form__select' required>
                                    <option value="" disabled selected>Selecciona un tipo de vehículo</option>
                                    <option value="car">Coche</option>
                                    <option value="motorcicle">Moto</option>
                                    <option value="truck">Camión</option>
                                </select>
                            </div>
                            <div className="grow1">
                                <label htmlFor="vehicleRegistration" className='add-vehicle-form__label'>Matrícula</label>
                                <input type="text" className='add-vehicle-form__input' placeholder="Introduce la matrícula de tu vehículo" />
                            </div>
                        </div>
                        <div className="add-vehicle-form-input-group">
                            <div className="grow-1">
                                <label htmlFor="vehicleMake" className='add-vehicle-form__label'>Marca</label>
                                <select name="vehicleMake" id="vehicleMake" className='add-vehicle-form__select' required>
                                    <option value="" disabled selected>Selecciona la marca</option>
                                    <option value="toyota">Toyota</option>
                                    <option value="seat">Seat</option>
                                    <option value="peugeot">Peugeot</option>
                                    <option value="kia">Kia</option>
                                    <option value="volkswagen">Volkswagen</option>
                                    <option value="hyundai">Hyundai</option>
                                    <option value="renault">Renault</option>
                                    <option value="dacia">Dacia</option>
                                    <option value="citroën">Citroën</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                    <option value="ford">Ford</option>
                                    <option value="opel">Opel</option>
                                    <option value="skoda">Skoda</option>
                                    <option value="bmw">BMW</option>
                                    <option value='otro'>Otro</option>
                                </select>
                            </div>
                            <div className="grow-1">
                                <label htmlFor="vehicleModel" className='add-vehicle-form__label'>Modelo</label>
                                <input type="text" className='add-vehicle-form__input' placeholder="Introduce el modelo te tu vehículo" />
                            </div>
                        </div>
                        <div className="add-vehicle-form-input-group">
                            <div className="grow-1">
                                <label htmlFor="kilometers" className='add-vehicle-form__label'>Kilómetros</label>
                                <input type="number" className='add-vehicle-form__input' placeholder="Introduce el kilometraje de tu vehículo" />
                            </div>
                            <div>
                                <label htmlFor="registrationYear" className='add-vehicle-form__label'>Fecha M.</label>
                                <input type="date" className='add-vehicle-form__input is-date' placeholder="Introduce el año de matriculación" />
                            </div>
                        </div>
                    </form>
                    <footer className="vehicle-modal-card-footer">
                        <button className='vehicle-modal-card-footer__button'>Cancelar</button>
                        <button type="submit" form='addVehicleForm' className='vehicle-modal-card-footer__button is-primary'>Añadir Vehículo</button>
                    </footer>
                </div>
            </section>
        </section>
    )
}