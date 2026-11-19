export default function Desenvolvedor(){
    return(
        <div className="max-w-300 mx-auto">
            <h1 className="text-[#20f] text-[50px] font-bold uppercase">Mateus</h1>
            <h1 className="text-[#757575] text-[44px] uppercase">Cardoso</h1>
            <h1 className="text-[30px] px-2.5">Desenvolvedor Full-Stack</h1>
            <figure className="overflow-hidden rounded-circle">
                <img src="src/assets/img/nerd.jpg" alt="teste" />
            </figure>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
                <a href="https://www.linkedin.com/in/mateus-cardoso-pires/" className="bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors">
                    <div className="bg-[#EFF6FF] text-[#2563EB] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">
                    🧑‍💻
                    </div>
                    <div>
                    <h4 className="text-base font-bold text-[#1E293B] mb-1 mt-0">Linkedin</h4>
                    <p className="text-[13px] text-[#64748B] m-0">/mateus-cardoso-pires</p>
                    </div>
                </a>
                <a href="https://github.com/MateusCPires" className="bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors">
                    <div className="bg-[#EFF6FF] text-[#2563EB] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">
                    🧑‍💻
                    </div>
                    <div>
                    <h4 className="text-base font-bold text-[#1E293B] mb-1 mt-0">GitHub</h4>
                    <p className="text-[13px] text-[#64748B] m-0">/MateusCPires</p>
                    </div>
                </a>
                <a className="bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors">
                    <div className="bg-[#EFF6FF] text-[#2563EB] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">
                    📞
                    </div>
                    <div>
                    <h4 className="text-base font-bold text-[#1E293B] mb-1 mt-0">Telefone</h4>
                    <p className="text-[13px] text-[#64748B] m-0">11 12345-6789</p>
                    </div>
                </a>
                <a href="mateuscardosopires09@gmail.com" className="bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors">
                    <div className="bg-[#EFF6FF] text-[#2563EB] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">
                    ✉️
                    </div>
                    <div>
                    <h4 className="text-base font-bold text-[#1E293B] mb-1 mt-0">E-mail</h4>
                    <p className="text-[13px] text-[#64748B] m-0">
                        mateuscardosopires09@gmail.com
                    </p>
                    </div>
                </a>
            </div>
            
            <p className="text-[#757575]">
                Técnico em Desenvolvimento de Sistemas pela ETEC Fernando Prestes, atualmente cursando Desenvolvimento de Software Multiplataforma na FATEC Votorantim. Experiência prática com Laravel, React Native, C# e bancos de dados SQL. Projetos autorais publicados no GitHub demonstram domínio de full-stack development e arquitetura de aplicações.
            </p>
        </div>
    )
}