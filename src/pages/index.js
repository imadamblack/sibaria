import Image from 'next/image';
import Blockbuster from '../components/blockbuster';
import Link from 'next/link';
import OptInForm from '../components/form/opt-in-form';
import { useEffect, useState } from 'react';
import scrollDepth from '../utils/scrollDepth';
import Faqs from '../components/faqs';
import { info } from '../../info';

import i00 from '../../public/landing/000.png';
import i01 from '../../public/landing/01.png';
import i02 from '../../public/landing/001.png';
import i03 from '../../public/landing/002.png';
import i04 from '../../public/landing/003.png';
import i05 from '../../public/landing/004.png';
import i06 from '../../public/landing/005.jpg';
import i07 from '../../public/landing/006.png';
import i08 from '../../public/landing/007.png';
import i09 from '../../public/landing/008.jpg';
import i10 from '../../public/landing/009.png';
import i11 from '../../public/landing/010.png';
import i12 from '../../public/landing/011.png';
import ico01 from '../../public/landing/icons/01.png';
import ico02 from '../../public/landing/icons/02.png';
import ico03 from '../../public/landing/icons/03.png';
import ico04 from '../../public/landing/icons/04.png';
import i13 from '../../public/landing/012.png';
import whatsapp from '../../public/whatsapp.svg'
import fbEvent from '../services/fbEvents';

export default function Home() {
  const [lastClick, setLastClick] = useState('');

  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => fbq('trackCustom', `Scroll Depth: ${value}`),
    });
  });

  const date = new Date();
  const month = date.toLocaleDateString('es-MX', {month: 'long'});
  date.setMonth(date.getMonth() + 3);
  const endMonth = date.toLocaleString('es-MX', {month:'long'});
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  console.log(lastDay);

  const cta = {
    main: 'Descubre tu nuevo hogar, da clic',
    description: 'Últimas casas disponibles con entrega inmediata',
  };

  return (
    <>
      <section className="relative min-h-[72rem] w-full flex flex-col md:justify-end items-center bg-brand-1">

        <div className="relative min-h-[24rem] flex-grow w-full md:absolute top-0 inset-x-0 bottom-1/2 md:bottom-0">
          <div
            className="w-full h-[24rem] bottom-0 absolute bg-gradient-to-t from-brand-1 md:from-black via-transparent to-transparent md:opacity-60 z-10"/>
          <Image src={i13} layout="fill" className="object-cover object-right"/>
        </div>

        <div className="container w-full text-left text-white z-10 p-8">
          <h1
            className="md:w-2/3 relative font-bold ft-11 text-white [text-shadow:_2px_2px_0_rgb(0_0_0_/_20%)]">
            Vive en la Gourmetería
          </h1>
          <p className="ft-3 mt-4">A 10 min del periférico sur</p>
          <p className="ft-3">Casas con entrega inmediata</p>
          <p className="ft-3">Desde $5.5 MDP</p>
          <div className="flex flex-col justify-start items-start mt-12">
            <Link href="#contact">
              <a onClick={() => setLastClick('benefits')} className="button mb-4">{cta.main}</a>
            </Link>
          </div>
          <p className="material-icons animate-bounce"><span className="ft-9">expand_more</span></p>
        </div>
        {/*<div className="w-full py-6 bg-red-500 z-50">*/}
        {/*  <p className="ft-0 text-center text-white font-bold mx-auto">{cta.description}</p>*/}
        {/*</div>*/}
      </section>

      <section className="reading-container my-16">
        <p className="ft-2">
          Si quieres vivir en una zona exclusiva sin los cuentos de “te la entregamos en un año”, bienvenido a Sibaria.
          <br/><br/>
          Seguridad, ubicación premium y amenidades listas para que te mudes en 15 días.
        </p>
      </section>

      <Blockbuster
        overhead="Beneficios"
        title="¿Por qué Sibaria Residencial es tu mejor opción para vivir?"
        description="Ahí te van tres razones para vivir aquí (aunque podríamos darte más)"
        image={i01}
      />
      <section className="my-16">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex flex-col">
            <h3>Entrega en 15 días</h3>
            <p className="ft-2 mb-8">Compra hoy y múdate en 15 días. Sin cuentos, sin retrasos</p>
            <div className="relative h-[48rem] rounded-2xl overflow-hidden flex items-center mt-auto mb-8">
              <Image src={i02} layout="fill" objectFit="cover"/>
            </div>
          </div>
          <div className="flex flex-col">
            <h3>A 500m del primer retorno a Periférico</h3>
            <p className="ft-2 mb-8">Ubicación privilegiada: hospitales, escuelas y zonas comerciales.</p>
            <div className="relative h-[48rem] rounded-2xl overflow-hidden flex items-center mb-8">
              <Image src={i03} layout="fill" objectFit="cover"/>
            </div>
          </div>
          <div className="flex flex-col">
            <h3>Amenidades para toda la familia</h3>
            <p className="ft-2 mb-8">Alberca, casa club, gym y más, listas para ti desde el primer día.</p>
            <div className="relative h-[48rem] rounded-2xl overflow-hidden flex items-center mb-8">
              <Image src={i04} layout="fill" objectFit="cover"/>
            </div>
          </div>
        </div>
        <div className="reading-container">
          <div className="flex flex-col justify-center items-center">
            <Link href="#contact">
              <a onClick={() => setLastClick('benefits')} className="button mb-4">Quiero conocer más detalles</a>
            </Link>
            <p className="-ft-2 text-center">{cta.description}</p>
          </div>
        </div>
      </section>

      <Blockbuster
        overhead="Amenidades"
        title="Aquí la vida ya está pasando y tú sigues viendo renders en otros lados"
        image={i05}
      />
      <section className="px-16 my-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="relative w-full items-stretch pt-[100%] lg:pt-[200%] rounded-xl overflow-hidden">
            <Image src={i06} layout="fill" className="object-cover z-0"/>
            <div className="relative w-full md:h-[14rem] z-10 bg-brand-2 p-12 bottom-0">
              <h3 className="ft-5 font-bold">Alberca Climatizada</h3>
            </div>
          </div>
          <div className="relative w-full items-stretch pt-[100%] lg:pt-[200%] rounded-xl overflow-hidden">
            <Image src={i07} layout="fill" className="object-cover object-bottom z-0"/>
            <div className="relative w-full md:h-[14rem] z-10 bg-brand-2 p-12 bottom-0">
              <h3 className="ft-5 font-bold">Pista de Jogging</h3>
            </div>
          </div>
          <div className="relative w-full items-stretch pt-[100%] lg:pt-[200%] rounded-xl overflow-hidden">
            <Image src={i08} layout="fill" className="object-cover z-0"/>
            <div className="relative w-full md:h-[14rem] z-10 bg-brand-2 p-12 bottom-0">
              <h3 className="ft-5 font-bold">Áreas Verdes</h3>
            </div>
          </div>
          <div className="relative w-full items-stretch pt-[100%] lg:pt-[200%] rounded-xl overflow-hidden">
            <Image src={i09} layout="fill" className="object-cover z-0"/>
            <div className="relative w-full md:h-[14rem] z-10 bg-brand-2 p-12 bottom-0">
              <h3 className="ft-5 font-bold">Sport Bar</h3>
            </div>
          </div>
          <div className="relative w-full items-stretch pt-[100%] lg:pt-[200%] rounded-xl overflow-hidden">
            <Image src={i10} layout="fill" className="object-cover z-0"/>
            <div className="relative w-full md:h-[14rem] z-10 bg-brand-2 p-12 bottom-0">
              <h3 className="ft-5 font-bold">Gimnasio Equipado</h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact">
            <a onClick={() => setLastClick('specs')} className="button mb-4">Solicita una visita</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Otros beneficios"
        title="Con todo lo necesario para que vivas increíble o lo rentes de inmediato"
        image={i05}
      />
      <section className="container my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full flex gap-8 items-stretch border-2 border-brand-2 rounded-3xl p-12">
            <div className="relative w-1/3 overflow-hidden">
              <div className="relative w-2/3 pt-[100%] m-auto">
                <Image src={ico01} layout="fill" className="object-contain"/>
              </div>
            </div>
            <div className="w-2/3">
              <h3 className="ft-5 font-bold text-brand-1">Sabemos que “más verde” siempre es una buena idea</h3>
              <p>Vive rodeado de parques y paisajes verdes para que estés en un ambiente de paz con tu familia.</p>
            </div>
          </div>
          <div className="w-full flex gap-8 items-stretch border-2 border-brand-2 rounded-3xl p-12">
            <div className="relative w-1/3 overflow-hidden">
              <div className="relative w-2/3 pt-[100%] m-auto">
                <Image src={ico02} layout="fill" className="object-contain"/>
              </div>
            </div>
            <div className="w-2/3">
              <h3 className="ft-5 font-bold text-brand-1">Nada de cables horribles colgando por todos lados</h3>
              <p>Instalaciones de luz, cable y telefonía subterráneas para disminuir la contaminación visual.</p>
            </div>
          </div>
          <div className="w-full flex gap-8 items-stretch border-2 border-brand-2 rounded-3xl p-12">
            <div className="relative w-1/3 overflow-hidden">
              <div className="relative w-2/3 pt-[100%] m-auto">
                <Image src={ico03} layout="fill" className="object-contain"/>
              </div>
            </div>
            <div className="w-2/3">
              <h3 className="ft-5 font-bold text-brand-1">Más luz, menos gasto, mejor estética</h3>
              <p>Iluminación LED en todo el fraccionamiento para cuidar el gasto de luz y que tu mantenimiento sea más
                accesible.</p>
            </div>
          </div>
          <div className="w-full flex gap-8 items-stretch border-2 border-brand-2 rounded-3xl p-12">
            <div className="relative w-1/3 overflow-hidden">
              <div className="relative w-2/3 pt-[100%] m-auto">
                <Image src={ico04} layout="fill" className="object-contain"/>
              </div>
            </div>
            <div className="w-2/3">
              <h3 className="ft-5 font-bold text-brand-1">Urbanización que no parece del siglo pasado</h3>
              <p>Vialidades de concreto estampado para que no te preocupes porque salieron baches en cada temporada de
                lluvias.</p>
            </div>
          </div>

        </div>

        <div className="flex flex-col justify-center mt-16 items-center">
          <Link href="#contact">
            <a onClick={() => setLastClick('specs')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Testimonios"
        title="Ellos ya se mudaron sin esperar años… ¿y tú?"
        image={i11}
      />
      <section className="my-16">
        <div className="flex flex-col items-center justify-center md:mx-52 mx-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">
            <div className="w-full flex flex-col bg-brand-2 rounded-2xl overflow-hidden">
              <div className="flex flex-col gap-10 px-20 py-16 flex-grow">
                <div className="relative w-full flex justify-start text-brand-2">
                  <div className="material-icons ft-11 text-brand-1">format_quote</div>
                </div>
                <p className="ft-2">
                  Nos prometieron una casa lista y lo cumplieron. Nos mudamos en 15 días a partir de que firmamos, fue
                  la mejor decisión. 10/10 recomendado.
                </p>
                <div className="mt-auto">
                  <p className="text-brand-1 ft-4 font-bold">Javier R</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col bg-brand-2 rounded-2xl overflow-hidden">
              <div className="flex flex-col gap-10 px-20 py-16 flex-grow">
                <div className="relative w-full flex justify-start text-brand-2">
                  <div className="material-icons ft-11 text-brand-1">format_quote</div>
                </div>
                <p className="ft-2">
                  Invertimos aquí porque nos dio confianza ver todo terminado, las casas, las amenidades, estamos muy
                  felices de haber comprado aquí.
                </p>
                <div className="mt-auto">
                  <p className="text-brand-1 ft-4 font-bold">Ana M</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col bg-brand-2 rounded-2xl overflow-hidden">
              <div className="flex flex-col gap-10 px-20 py-16 flex-grow">
                <div className="relative w-full flex justify-start text-brand-2">
                  <div className="material-icons ft-11 text-brand-1">format_quote</div>
                </div>
                <p className="ft-2">
                  Las amenidades son un hit. Mis hijos aman la alberca, todos en la familia estamos disfrutando vivir
                  aquí. Vivir aquí es como estar siempre de vacaciones.
                </p>
                <div className="mt-auto">
                  <p className="text-brand-1 ft-4 font-bold">Eduardo P</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact"><a className="button mb-4">{cta.main}</a></Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Garantías"
        title="Comprar tu casa en Sibaria Residencial es tan lógico como inevitable"
        image={i12}
      />
      <section className="py-16 bg-[#1c1c1c]">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="p-12 rounded-xl bg-brand-3 flex items-center">
            <p className="ft-2 text-white text-center"><b>Más de 60 familias ya viven aquí:</b><br/> O sea, no eres el
              primero en descubrir esta joya</p>
          </div>
          <div className="p-12 rounded-xl bg-brand-3 flex items-center">
            <p className="ft-2 text-white text-center"><b>Plusvalía asegurada:</b><br/>Tu patrimonio crece sin que
              tengas que hacer nada.</p>
          </div>
          <div className="p-12 rounded-xl bg-brand-3 flex items-center">
            <p className="ft-2 text-white text-center"><b>Garantía de 1 año</b><br/>Siempre hay vicios ocultos pero
              confiamos en lo que vendemos.</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact">
            <a onClick={() => setLastClick('target')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center text-white">{cta.description}</p>
        </div>

      </section>

      <Blockbuster
        overhead="Preguntas frecuentes"
        title="Todo lo que quieres saber antes de mudarte a Sibaria está aquí"
        image={i00}
      />
      <section className="container py-8">
        <Faqs/>
      </section>

      <div className='sticky bottom-0 overflow-hidden mt-20 z-50 border-t border-brand-2 shadow-[0_-6px_12px_rgba(0,0,0,0.25)]'>
        <div className='-mx-8 flex bg-brand-5'>
          <div className='container mt-0'>
            <a
              href={`https://wa.me/${info.whatsapp.value}?text=${info.whatsapp.message}`}
              target="_blank"
              className='ft-3 button hover:bg-brand-5 !mt-0 !w-full !py-8 !px-16'
              onClick={() => fbEvent('Contact')}
            >
              <span className="filter invert mr-4"><Image src={whatsapp} width={24} height={24}/></span>
              Mándanos un WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Contacto  */}
      <section id="contact" className="border-t border-brand-1 bg-brand-1 py-20">
        <div className="container">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="!font-bold text-white">
              Visítanos en {month} y si compras antes del {lastDay} de {endMonth}, te regalamos un año de mantenimiento.
            </h2>
            <div className="mt-20 mb-12">
              <p className="ft-1 text-white">
                Déjanos tus datos y programemos tu visita.
              </p>
            </div>
            <OptInForm
              lastClick={lastClick}
            />
          </div>
        </div>
      </section>
    </>
  );
}
