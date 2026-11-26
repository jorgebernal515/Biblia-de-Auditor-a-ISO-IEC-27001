window.CONTROLS_DATA = [
  // =========================================================
  // ISO/IEC 27001:2022 — SGSI (CLÁUSULAS 4 A 10)
  // =========================================================
  {
    id: "4.1-4.3",
    dominio: "SGSI (Cláusulas 4–10)",
    nuevo2022: false,
    numeral: "ISO/IEC 27001:2022 — Cláusulas 4.1, 4.2 y 4.3 (Contexto y Alcance del SGSI)",
    palabras_clave: ["Alcance y Contexto SGSI"],
    sinonimos: ["contexto", "partes interesadas", "alcance", "limites", "cambio climatico", "4.1", "4.2", "4.3"],
    objetivo: "Determinar cuestiones internas/externas, requisitos de partes interesadas y definir límites aplicables del SGSI.",
    evidencia: [
      "Documento formal de Alcance del SGSI aprobado (sedes, procesos, sistemas).",
      "Matriz de contexto interno/externo (incluyendo consideración climática 2024).",
      "Registro de partes interesadas y sus requisitos legales/contractuales."
    ],
    prueba: "Inspección documental del alcance frente al mapa de procesos reales y verificación de interfaces tercerizadas.",
    riesgo: "Exclusión indebida de procesos o activos críticos que deja brechas de seguridad sin gobierno ni control."
  },
  {
    id: "5.1-5.2",
    dominio: "SGSI (Cláusulas 4–10)",
    nuevo2022: false,
    numeral: "ISO/IEC 27001:2022 — Cláusulas 5.1 y 5.2 (Liderazgo y Política de Seguridad)",
    palabras_clave: ["Liderazgo y Política SGSI"],
    sinonimos: ["alta direccion", "politica", "compromiso", "roles", "5.1", "5.2", "5.3"],
    objetivo: "Asegurar el compromiso visible de la alta dirección y establecer una política alineada a la estrategia del negocio.",
    evidencia: [
      "Política de Seguridad de la Información firmada, vigente y publicada.",
      "Actas de asignación de recursos y designación de roles/responsabilidades.",
      "Registros de comunicación y aceptación de la política por el personal."
    ],
    prueba: "Inspección documental de la política, indagación con la alta dirección y muestreo de lectura/aceptación en empleados.",
    riesgo: "Falta de autoridad, presupuesto o respaldo ejecutivo que convierte el SGSI en un esfuerzo meramente documental."
  },
  {
    id: "6.1.2",
    dominio: "SGSI (Cláusulas 4–10)",
    nuevo2022: false,
    numeral: "ISO/IEC 27001:2022 — Cláusula 6.1.2 (Evaluación de Riesgos de Seguridad)",
    palabras_clave: ["Gestión de Riesgos"],
    sinonimos: ["riesgos", "amenazas", "vulnerabilidades", "criterios", "6.1", "6.1.2", "matriz"],
    objetivo: "Establecer y aplicar una metodología repetible para identificar, analizar y evaluar riesgos sobre confidencialidad, integridad y disponibilidad.",
    evidencia: [
      "Metodología documentada con criterios de aceptación y valoración de riesgos.",
      "Matriz de riesgos actualizada con propietarios designados.",
      "Evidencia de revisiones periódicas y ante cambios significativos (Cláusula 6.3)."
    ],
    prueba: "Inspección de la matriz de riesgos y re-ejecución del cálculo de riesgo sobre una muestra de activos críticos.",
    riesgo: "Implementación de controles inadecuados o desproporcionados frente a las amenazas reales de la organización."
  },
  {
    id: "6.1.3-SoA",
    dominio: "SGSI (Cláusulas 4–10)",
    nuevo2022: false,
    numeral: "ISO/IEC 27001:2022 — Cláusula 6.1.3 d) (Declaración de Aplicabilidad - SoA)",
    palabras_clave: ["Declaración de Aplicabilidad (SoA)"],
    sinonimos: ["soa", "aplicabilidad", "anexo a", "exclusiones", "tratamiento", "6.1.3"],
    objetivo: "Documentar los controles del Anexo A seleccionados para tratar riesgos y justificar técnicamente cualquier exclusión o inclusión.",
    evidencia: [
      "Declaración de Aplicabilidad (SoA) versión 2022 aprobada y fechada.",
      "Plan de Tratamiento de Riesgos (PTR) enlazado con los controles de la SoA.",
      "Justificación documentada de los controles declarados como no aplicables."
    ],
    prueba: "Cruce documental entre la matriz de riesgos, el PTR y los 93 controles de la SoA para validar trazabilidad y exclusiones.",
    riesgo: "Omisión injustificada de controles obligatorios o incoherencia entre los riesgos identificados y los controles implementados."
  },
  {
    id: "9.2",
    dominio: "SGSI (Cláusulas 4–10)",
    nuevo2022: false,
    numeral: "ISO/IEC 27001:2022 — Cláusula 9.2 (Auditoría Interna)",
    palabras_clave: ["Auditoría Interna"],
    sinonimos: ["programa de auditoria", "hallazgos", "objetividad", "independencia", "9.2", "9.2.1", "9.2.2"],
    objetivo: "Verificar periódicamente que el SGSI cumple los requisitos de la norma, de la organización y se mantiene eficazmente.",
    evidencia: [
      "Programa anual de auditorías internas y planes por ciclo.",
      "Informes de auditoría interna con hallazgos y criterios evaluados.",
      "Hojas de vida/certificados de competencia e independencia de los auditores."
    ],
    prueba: "Inspección documental de informes previos y verificación de que ningún auditor evaluó su propio trabajo.",
    riesgo: "Detección tardía de fallas de control o pérdida de objetividad que invalida la eficacia del SGSI."
  },
  {
    id: "9.3-10.2",
    dominio: "SGSI (Cláusulas 4–10)",
    nuevo2022: false,
    numeral: "ISO/IEC 27001:2022 — Cláusulas 9.3 y 10.2 (Revisión por la Dirección y No Conformidades)",
    palabras_clave: ["Mejora y No Conformidades"],
    sinonimos: ["mejora continua", "acciones correctivas", "causa raiz", "revision direccion", "9.3", "10.1", "10.2"],
    objetivo: "Evaluar el desempeño del SGSI desde la alta dirección y eliminar las causas raíz de no conformidades para evitar su recurrencia.",
    evidencia: [
      "Actas de Revisión por la Dirección cubriendo todas las entradas/salidas de 9.3.",
      "Registro de No Conformidades con análisis de causa raíz y plan de acción.",
      "Evidencia de verificación de eficacia de las acciones correctivas cerradas."
    ],
    prueba: "Inspección de actas de revisión y muestreo de no conformidades cerradas para comprobar eficacia real del cierre.",
    riesgo: "Repetición crónica de incidentes y hallazgos por aplicar correcciones superficiales sin atacar la causa raíz."
  },

  // =========================================================
  // ISO/IEC 27002:2022 — 5. CONTROLES ORGANIZACIONALES
  // =========================================================
  {
    id: "5.3",
    dominio: "5. Organizacionales",
    nuevo2022: false,
    numeral: "ISO/IEC 27002:2022 — Control 5.3 (Segregación de funciones)",
    palabras_clave: ["Segregación de Funciones"],
    sinonimos: ["sod", "conflictos de interes", "roles incompatibles", "A.5.3"],
    objetivo: "Separar tareas y áreas de responsabilidad conflictivas para reducir oportunidades de fraude, error o modificación no autorizada.",
    evidencia: [
      "Matriz de incompatibilidad de roles (SoD) en sistemas críticos y TI.",
      "Listado de usuarios con roles asignados en ERP, bases de datos y producción.",
      "Controles compensatorios documentados cuando la segregación no sea viable."
    ],
    prueba: "Análisis mediante CAATs (cruce de permisos de usuarios) para detectar quien desarrolla y pasa a producción o crea y aprueba pagos.",
    riesgo: "Fraude interno, manipulación de datos financieros o despliegue de código malicioso sin doble control."
  },
  {
    id: "5.7",
    dominio: "5. Organizacionales",
    nuevo2022: true,
    numeral: "ISO/IEC 27002:2022 — Control 5.7 (Inteligencia de amenazas)",
    palabras_clave: ["Inteligencia de Amenazas"],
    sinonimos: ["threat intelligence", "ioc", "csirt", "alertas", "boletines", "A.5.7"],
    objetivo: "Recopilar y analizar información sobre amenazas cibernéticas para tomar decisiones preventivas y mitigar ataques emergentes.",
    evidencia: [
      "Suscripción o feeds activos de fuentes confiables (CERT/CSIRT, fabricantes).",
      "Boletines internos o tickets de análisis de amenazas (IOCs, CVEs críticos).",
      "Reglas actualizadas en firewall, EDR o SIEM derivadas de inteligencia recibida."
    ],
    prueba: "Indagación con el equipo de seguridad y trazabilidad de un boletín de amenaza reciente hasta su bloqueo en herramientas técnicas.",
    riesgo: "Exposición prolongada a campañas de ransomware o vulnerabilidades explotadas activamente por falta de visibilidad."
  },
  {
    id: "5.9-5.12",
    dominio: "5. Organizacionales",
    nuevo2022: false,
    numeral: "ISO/IEC 27002:2022 — Controles 5.9 y 5.12 (Inventario y Clasificación de Información)",
    palabras_clave: ["Inventario y Clasificación de Activos"],
    sinonimos: ["activos", "propietarios", "etiquetado", "confidencial", "5.9", "5.12", "5.13", "A.5.9", "A.5.12"],
    objetivo: "Mantener un inventario actualizado de activos con propietarios definidos y clasificar la información según su sensibilidad.",
    evidencia: [
      "Inventario consolidado de activos de información, hardware, software y nube.",
      "Esquema formal de clasificación (ej. Pública, Interna, Confidencial, Restringida).",
      "Muestra de documentos/repositorios correctamente etiquetados."
    ],
    prueba: "Observación en CMDB/inventario y verificación física o lógica de una muestra aleatoria de activos para validar propietario y clasificación.",
    riesgo: "Pérdida o fuga de datos sensibles sin responsable asignado ni nivel de protección acorde a su criticidad."
  },
  {
    id: "5.15",
    dominio: "5. Organizacionales",
    nuevo2022: false,
    numeral: "ISO/IEC 27002:2022 — Control 5.15 (Control de acceso)",
    palabras_clave: ["Control de Acceso"],
    sinonimos: ["privilegio minimo", "need to know", "altas bajas", "5.15", "5.18", "A.5.15"],
    objetivo: "Restringir el acceso físico y lógico a la información según el principio de menor privilegio y necesidad de conocer.",
    evidencia: [
      "Política de control de acceso y flujo formal de aprobación de permisos.",
      "Tickets de solicitud y aprobación de acceso por el propietario del activo.",
      "Registros de revisiones periódicas de derechos de acceso (recertificación)."
    ],
    prueba: "Inspección de muestra de usuarios activos/privilegiados frente a tickets aprobados y verificación de última recertificación de accesos.",
    riesgo: "Acumulación excesiva de privilegios que amplifica el impacto ante compromiso de cuentas o abuso interno."
  },
  {
    id: "5.17",
    dominio: "5. Organizacionales",
    nuevo2022: false,
    numeral: "ISO/IEC 27002:2022 — Control 5.17 (Información de autenticación)",
    palabras_clave: ["Contraseñas / Autenticación"],
    sinonimos: ["password", "claves", "credenciales", "mfa", "doble factor", "8.5", "A.5.17"],
    objetivo: "Garantizar la asignación, gestión segura y confidencialidad de credenciales de acceso para evitar suplantación de identidad.",
    evidencia: [
      "Política formal de contraseñas y autenticación robusta.",
      "Capturas de configuración de complejidad, bloqueo y caducidad en Directorio Activo / IdP.",
      "Actas de entrega segura de credenciales iniciales y activación de MFA."
    ],
    prueba: "Inspección de parámetros de seguridad en servidores/IdP y verificación mediante prueba de intento de clave débil.",
    riesgo: "Acceso no autorizado a sistemas críticos mediante fuerza bruta, robo de credenciales o uso de claves por defecto."
  },
  {
    id: "5.19",
    dominio: "5. Organizacionales",
    nuevo2022: false,
    numeral: "ISO/IEC 27002:2022 — Control 5.19 (Seguridad de la información en relaciones con proveedores)",
    palabras_clave: ["Seguridad en Proveedores y Nube"],
    sinonimos: ["terceros", "contratos", "nda", "sla", "5.19", "5.20", "5.21", "A.5.19"],
    objetivo: "Gestionar y acordar requisitos de seguridad de la información con proveedores que acceden, procesan o almacenan datos.",
    evidencia: [
      "Matriz de proveedores críticos clasificados por nivel de riesgo.",
      "Contratos vigentes con cláusulas de seguridad, confidencialidad y derecho a auditar.",
      "Informes periódicos de evaluación o auditoría de seguridad a terceros (ej. SOC 2)."
    ],
    prueba: "Inspección contractual de los 5 proveedores más críticos y verificación de evidencias de evaluación anual de cumplimiento.",
    riesgo: "Brechas de seguridad o pérdida de datos originadas en la cadena de suministro sin cobertura legal ni control."
  },
  {
    id: "5.23",
    dominio: "5. Organizacionales",
    nuevo2022: true,
    numeral: "ISO/IEC 27002:2022 — Control 5.23 (Seguridad de la información para el uso de servicios en la nube)",
    palabras_clave: ["Seguridad en Proveedores y Nube"],
    sinonimos: ["cloud", "aws", "azure", "gcp", "saas", "responsabilidad compartida", "A.5.23"],
    objetivo: "Definir procesos para la adquisición, uso, gestión y salida segura de servicios en la nube bajo el modelo de responsabilidad compartida.",
    evidencia: [
      "Política de uso seguro de nube y matriz de responsabilidad compartida por servicio.",
      "Configuración de seguridad en consola cloud (IAM, cifrado, buckets privados).",
      "Plan de salida o portabilidad de datos al finalizar el contrato cloud."
    ],
    prueba: "Observación directa en consola cloud (AWS/Azure/GCP) validando ausencia de almacenamiento público y uso de MFA en cuentas root.",
    riesgo: "Exposición pública de bases de datos o almacenamiento en la nube por configuraciones erróneas o dependencia del proveedor."
  },
  {
    id: "5.24-5.26",
    dominio: "5. Organizacionales",
    nuevo2022: false,
    numeral: "ISO/IEC 27002:2022 — Controles 5.24 y 5.26 (Gestión y Respuesta a Incidentes)",
    palabras_clave: ["Gestión de Incidentes"],
    sinonimos: ["brecha", "respuesta", "playbooks", "lecciones aprendidas", "5.24", "5.25", "5.26", "5.27", "A.5.24"],
    objetivo: "Asegurar un enfoque rápido, coherente y eficaz para detectar, reportar, contener y aprender de incidentes de seguridad.",
    evidencia: [
      "Procedimiento de respuesta a incidentes y playbooks (ej. ransomware, phishing).",
      "Bitácora o herramienta de tickets con incidentes registrados, tiempos de respuesta y cierre.",
      "Informes post-incidente con lecciones aprendidas y pruebas de simulación."
    ],
    prueba: "Inspección de los últimos incidentes cerrados verificando cumplimiento de tiempos de escalamiento y acciones correctivas.",
    riesgo: "Propagación descontrolada de un ciberataque, pérdida de evidencia forense e incremento del daño financiero y reputacional."
  },
  {
    id: "5.30",
    dominio: "5. Organizacionales",
    nuevo2022: true,
    numeral: "ISO/IEC 27002:2022 — Control 5.30 (Preparación de las TIC para la continuidad del negocio)",
    palabras_clave: ["Continuidad TIC"],
    sinonimos: ["drp", "bcp", "rto", "rpo", "contingencia", "recuperacion", "A.5.30"],
    objetivo: "Planificar, implementar, mantener y probar la infraestructura TIC para cumplir los objetivos de continuidad ante interrupciones.",
    evidencia: [
      "Análisis de Impacto al Negocio (BIA) con RTO y RPO definidos para sistemas críticos.",
      "Plan de Recuperación ante Desastres (DRP) actualizado.",
      "Actas de pruebas anuales de recuperación TIC con resultados y brechas corregidas."
    ],
    prueba: "Inspección del último informe de prueba de DRP verificando si los tiempos reales de recuperación cumplieron el RTO pactado.",
    riesgo: "Indisponibilidad prolongada de servicios críticos y pérdida irreversible de transacciones ante fallas mayores o desastres."
  },
  {
    id: "5.31-5.34",
    dominio: "5. Organizacionales",
    nuevo2022: false,
    numeral: "ISO/IEC 27002:2022 — Controles 5.31 y 5.34 (Requisitos Legales y Privacidad de PII)",
    palabras_clave: ["Cumplimiento Legal y Privacidad"],
    sinonimos: ["ley 1581", "habeas data", "datos personales", "pii", "gdpr", "normograma", "5.31", "5.34", "A.5.31", "A.5.34"],
    objetivo: "Identificar y cumplir requisitos legales, reglamentarios y de protección de datos personales (PII) aplicables a la organización.",
    evidencia: [
      "Matriz de requisitos legales/normograma de TI actualizado (ej. Ley 1581 de 2012).",
      "Política de tratamiento de datos personales y autorizaciones de titulares.",
      "Registros de atención a reclamos o consultas (habeas data) dentro de los plazos de ley."
    ],
    prueba: "Inspección del normograma y verificación por muestreo de formularios digitales para comprobar autorización previa del titular.",
    riesgo: "Sanciones regulatorias, multas por incumplimiento de protección de datos y demandas contractuales o de clientes."
  },

  // =========================================================
  // ISO/IEC 27002:2022 — 6. CONTROLES DE PERSONAS
  // =========================================================
  {
    id: "6.1-6.5",
    dominio: "6. Personas",
    nuevo2022: false,
    numeral: "ISO/IEC 27002:2022 — Controles 6.1 y 6.5 (Selección y Desvinculación de Personal)",
    palabras_clave: ["Selección y Desvinculación"],
    sinonimos: ["contratacion", "antecedentes", "retiro", "offboarding", "paz y salvo", "6.1", "6.2", "6.5", "A.6.1", "A.6.5"],
    objetivo: "Verificar idoneidad antes de contratar y asegurar la revocación oportuna de accesos y devolución de activos al finalizar el vínculo.",
    evidencia: [
      "Registros de verificación de antecedentes y acuerdos de confidencialidad (NDA) firmados.",
      "Checklist de desvinculación (paz y salvo de activos físicos).",
      "Logs de revocación de cuentas en Directorio Activo/VPN comparados contra fecha de retiro en RRHH."
    ],
    prueba: "CAATs: cruce de base de retiros de RRHH de los últimos 6 meses contra usuarios activos en Directorio Activo y aplicaciones.",
    riesgo: "Acceso indebido de exempleados o contratistas a sistemas internos tras su salida de la organización."
  },
  {
    id: "6.3",
    dominio: "6. Personas",
    nuevo2022: false,
    numeral: "ISO/IEC 27002:2022 — Control 6.3 (Concientización, educación y capacitación)",
    palabras_clave: ["Concientización y Capacitación"],
    sinonimos: ["phishing", "formacion", "induccion", "cultura", "sensibilizacion", "A.6.3"],
    objetivo: "Asegurar que el personal y terceros relevantes reciban formación continua en seguridad y conozcan sus responsabilidades.",
    evidencia: [
      "Plan anual de concientización y contenido de inducción en seguridad.",
      "Listados de asistencia o reportes de aprobación de plataforma LMS.",
      "Resultados de campañas simuladas de phishing y acciones de refuerzo."
    ],
    prueba: "Inspección de tasas de cumplimiento en plataforma de formación e indagación aleatoria a 3 empleados sobre cómo reportar phishing.",
    riesgo: "Alta susceptibilidad a ingeniería social, phishing o manejo inseguro de información por desconocimiento del personal."
  },
  {
    id: "6.7",
    dominio: "6. Personas",
    nuevo2022: false,
    numeral: "ISO/IEC 27002:2022 — Control 6.7 (Trabajo remoto)",
    palabras_clave: ["Trabajo Remoto"],
    sinonimos: ["teletrabajo", "vpn", "home office", "equipos portatiles", "cifrado disco", "A.6.7"],
    objetivo: "Proteger la información accedida, procesada o almacenada desde ubicaciones externas a las instalaciones de la organización.",
    evidencia: [
      "Política o guía de trabajo remoto seguro aprobada.",
      "Evidencia técnica de acceso vía VPN con MFA y cifrado completo de disco (ej. BitLocker).",
      "Política de escritorio limpio y uso autorizado de equipos corporativos."
    ],
    prueba: "Inspección de configuración MDM/GPO validando cifrado de disco obligatorio en portátiles y conexión VPN con MFA.",
    riesgo: "Robo o interceptación de datos corporativos en redes domésticas/públicas inseguras o pérdida de equipos sin cifrar."
  },

  // =========================================================
  // ISO/IEC 27002:2022 — 7. CONTROLES FÍSICOS
  // =========================================================
  {
    id: "7.2",
    dominio: "7. Físicos",
    nuevo2022: false,
    numeral: "ISO/IEC 27002:2022 — Control 7.2 (Entrada física)",
    palabras_clave: ["Acceso y Monitoreo Físico"],
    sinonimos: ["datacenter", "biometria", "visitantes", "tarjetas", "perimetro", "7.1", "7.2", "A.7.2"],
    objetivo: "Asegurar las áreas seguras (como centros de datos) mediante controles de acceso físico que permitan el ingreso solo a personal autorizado.",
    evidencia: [
      "Listado autorizado de personal con acceso a cuarto de servidores/datacenter.",
      "Bitácora de ingreso de visitantes con acompañante y autorización previa.",
      "Logs electrónicos de lector biométrico o tarjetas RFID."
    ],
    prueba: "Observación directa en el centro de datos (puertas cerradas, lector activo) y cruce de logs físicos contra listado autorizado.",
    riesgo: "Ingreso físico no autorizado que derive en hurto de equipos, conexión de dispositivos maliciosos o sabotaje."
  },
  {
    id: "7.4",
    dominio: "7. Físicos",
    nuevo2022: true,
    numeral: "ISO/IEC 27002:2022 — Control 7.4 (Monitoreo de la seguridad física)",
    palabras_clave: ["Acceso y Monitoreo Físico"],
    sinonimos: ["cctv", "camaras", "alarmas", "vigilancia", "sensores", "A.7.4"],
    objetivo: "Monitorear continuamente las instalaciones físicas para detectar y disuadir intrusiones o accesos no autorizados en tiempo real.",
    evidencia: [
      "Inventario y plano de ubicación de cámaras CCTV y sensores de intrusión.",
      "Grabaciones retenidas según política y registro de pruebas de alarmas.",
      "Bitácora de revisión de alertas físicas por parte de vigilancia/seguridad."
    ],
    prueba: "Observación en centro de monitoreo/NVR comprobando ángulos sin puntos ciegos, fecha/hora sincronizada y retención de grabaciones.",
    riesgo: "Intrusiones físicas no detectadas ni investigables por fallas en cámaras, falta de grabación o ausencia de alertas."
  },
  {
    id: "7.14",
    dominio: "7. Físicos",
    nuevo2022: false,
    numeral: "ISO/IEC 27002:2022 — Control 7.14 (Eliminación segura o reutilización de equipos)",
    palabras_clave: ["Disposición Segura de Medios"],
    sinonimos: ["borrado seguro", "destruccion", "discos", "baja de activos", "sanitizacion", "A.7.14"],
    objetivo: "Garantizar que cualquier medio de almacenamiento sea verificado y sanitizado o destruido antes de su baja, venta o reutilización.",
    evidencia: [
      "Procedimiento de borrado seguro y disposición final de hardware.",
      "Certificados de borrado seguro (ej. NIST 800-88) o actas de destrucción física.",
      "Registros de baja en inventario de activos vinculados a los certificados."
    ],
    prueba: "Inspección de una muestra de activos dados de baja en el último año verificando su certificado de destrucción o borrado.",
    riesgo: "Recuperación de información confidencial por terceros desde discos desechados, donados o reasignados sin sanitizar."
  },

  // =========================================================
  // ISO/IEC 27002:2022 — 8. CONTROLES TECNOLÓGICOS
  // =========================================================
  {
    id: "8.7-8.8",
    dominio: "8. Tecnológicos",
    nuevo2022: false,
    numeral: "ISO/IEC 27002:2022 — Controles 8.7 y 8.8 (Protección contra Malware y Gestión de Vulnerabilidades)",
    palabras_clave: ["Gestión de Vulnerabilidades y Malware"],
    sinonimos: ["antivirus", "edr", "parches", "pentesting", "escaneo", "cve", "8.7", "8.8", "A.8.7", "A.8.8"],
    objetivo: "Prevenir infecciones de malware y detectar/remediar oportunamente vulnerabilidades técnicas en sistemas, redes y aplicaciones.",
    evidencia: [
      "Consola EDR/antimalware activa con cobertura superior al 95% de endpoints y servidores.",
      "Informes periódicos de escaneo de vulnerabilidades y pruebas de penetración (pentesting).",
      "Tickets de remediación y aplicación de parches críticos dentro de los SLA definidos."
    ],
    prueba: "Observación en consola EDR y herramienta de escaneo (ej. Nessus/Qualys) verificando remediación de CVEs críticos recientes.",
    riesgo: "Compromiso masivo por ransomware o explotación de vulnerabilidades públicas conocidas sin parchar."
  },
  {
    id: "8.9",
    dominio: "8. Tecnológicos",
    nuevo2022: true,
    numeral: "ISO/IEC 27002:2022 — Control 8.9 (Gestión de la configuración)",
    palabras_clave: ["Gestión de Configuraciones"],
    sinonimos: ["hardening", "linea base", "cis benchmark", "puertos", "servicios", "A.8.9"],
    objetivo: "Establecer, documentar, monitorear y mantener configuraciones seguras (líneas base/hardening) en hardware, software y redes.",
    evidencia: [
      "Estándares de hardening o líneas base documentadas (ej. CIS Benchmarks).",
      "Scripts o políticas (GPO/Ansible/Terraform) de despliegue estandarizado.",
      "Reportes de detección de desviaciones de configuración (configuration drift)."
    ],
    prueba: "Re-ejecución o inspección de parámetros en un servidor crítico verificando deshabilitación de servicios innecesarios y protocolos inseguros.",
    riesgo: "Apertura de brechas de seguridad por configuraciones por defecto, puertos expuestos o cambios manuales no controlados."
  },
  {
    id: "8.10",
    dominio: "8. Tecnológicos",
    nuevo2022: true,
    numeral: "ISO/IEC 27002:2022 — Control 8.10 (Eliminación de información)",
    palabras_clave: ["Eliminación, Enmascaramiento y DLP"],
    sinonimos: ["retencion", "purga", "borrado", "ciclo de vida", "datos vencidos", "A.8.10"],
    objetivo: "Eliminar de forma segura la información almacenada en sistemas y dispositivos cuando ya no sea necesaria o expire su plazo legal.",
    evidencia: [
      "Tabla o política de retención y disposición de datos digitales.",
      "Logs o scripts automatizados de purga/eliminación en bases de datos y backups.",
      "Justificación legal para datos que deban conservarse a largo plazo."
    ],
    prueba: "Inspección de tablas de retención y consulta en base de datos para validar que no persisten registros fuera del plazo autorizado.",
    riesgo: "Incumplimiento legal por retención excesiva de datos personales y mayor volumen de exposición en caso de brecha."
  },
  {
    id: "8.11",
    dominio: "8. Tecnológicos",
    nuevo2022: true,
    numeral: "ISO/IEC 27002:2022 — Control 8.11 (Enmascaramiento de datos)",
    palabras_clave: ["Eliminación, Enmascaramiento y DLP"],
    sinonimos: ["data masking", "anonimizacion", "seudonimizacion", "pruebas", "ambientes no productivos", "A.8.11"],
    objetivo: "Limitar la exposición de datos sensibles y personales mediante técnicas de enmascaramiento, seudonimización o anonimización.",
    evidencia: [
      "Reglas de enmascaramiento para ambientes de desarrollo/pruebas y reportes.",
      "Evidencia de scripts de ofuscación al clonar bases de datos de producción.",
      "Configuración de vistas enmascaradas en aplicaciones (ej. tarjetas o documentos parciales)."
    ],
    prueba: "Inspección directa en base de datos de pruebas/QA verificando que cédulas, tarjetas o correos reales estén ofuscados.",
    riesgo: "Fuga de datos reales de clientes desde entornos de desarrollo o pruebas que suelen tener menor nivel de protección."
  },
  {
    id: "8.12",
    dominio: "8. Tecnológicos",
    nuevo2022: true,
    numeral: "ISO/IEC 27002:2022 — Control 8.12 (Prevención de fuga de datos - DLP)",
    palabras_clave: ["Eliminación, Enmascaramiento y DLP"],
    sinonimos: ["dlp", "exfiltracion", "usb", "correo", "fuga", "A.8.12"],
    objetivo: "Detectar y prevenir la divulgación o extracción no autorizada de información sensible desde sistemas, redes y endpoints.",
    evidencia: [
      "Políticas configuradas en solución DLP (correo, web, nube, puertos USB).",
      "Alertas e incidentes bloqueados/registrados en la consola DLP.",
      "Listado de excepciones aprobadas formalmente (ej. uso de USB cifradas)."
    ],
    prueba: "Observación en consola DLP y prueba controlada de intento de envío de archivo con patrón sensible (ej. tarjeta/documento) fuera de la red.",
    riesgo: "Exfiltración silenciosa de propiedad intelectual, bases de datos o información regulada por error humano o acción maliciosa."
  },
  {
    id: "8.13",
    dominio: "8. Tecnológicos",
    nuevo2022: false,
    numeral: "ISO/IEC 27002:2022 — Control 8.13 (Respaldo de la información)",
    palabras_clave: ["Respaldo de Información (Backups)"],
    sinonimos: ["backups", "copias de seguridad", "restauracion", "inmutable", "3-2-1", "A.8.13"],
    objetivo: "Mantener copias de respaldo actualizadas, cifradas y probadas periódicamente para garantizar la recuperación ante pérdida de datos.",
    evidencia: [
      "Política de respaldos (frecuencia, retención, cifrado y copia fuera de línea/inmutable).",
      "Logs diarios de ejecución exitosa de backups en consola.",
      "Actas de pruebas periódicas de restauración completa con verificación de integridad."
    ],
    prueba: "Inspección de consola de backups de los últimos 30 días y verificación de la última prueba real de restauración de datos.",
    riesgo: "Pérdida definitiva de información operativa o incapacidad de recuperarse tras un ataque de ransomware o falla de almacenamiento."
  },
  {
    id: "8.15-8.16",
    dominio: "8. Tecnológicos",
    nuevo2022: true,
    numeral: "ISO/IEC 27002:2022 — Controles 8.15 y 8.16 (Registros de eventos y Actividades de monitoreo)",
    palabras_clave: ["Logs y Monitoreo"],
    sinonimos: ["siem", "soc", "bitacoras", "auditoria", "ntp", "correlacion", "8.15", "8.16", "8.17", "A.8.15", "A.8.16"],
    objetivo: "Generar, proteger y monitorear continuamente logs de eventos y comportamientos anómalos para detectar actividades maliciosas.",
    evidencia: [
      "Configuración de envío centralizado de logs a SIEM con sincronización horaria (NTP).",
      "Controles de integridad y acceso restringido para impedir alteración de bitácoras.",
      "Reglas de correlación activas y evidencias de atención de alertas en SIEM/SOC."
    ],
    prueba: "Observación en SIEM verificando ingesta actual de logs de servidores críticos y simulación de evento de alerta (ej. múltiples fallos de login).",
    riesgo: "Incapacidad de detectar intrusiones en curso o reconstruir la trazabilidad forense tras un incidente de seguridad."
  },
  {
    id: "8.20-8.23",
    dominio: "8. Tecnológicos",
    nuevo2022: true,
    numeral: "ISO/IEC 27002:2022 — Controles 8.20, 8.22 y 8.23 (Seguridad de Redes y Filtrado Web)",
    palabras_clave: ["Redes y Filtrado Web"],
    sinonimos: ["firewall", "segmentacion", "vlan", "proxy", "dns", "web filtering", "8.20", "8.22", "8.23", "A.8.20", "A.8.23"],
    objetivo: "Proteger y segmentar las redes y restringir el acceso a sitios web externos maliciosos o no autorizados.",
    evidencia: [
      "Diagrama de arquitectura de red con segmentación (DMZ, servidores, usuarios, invitados).",
      "Reglas vigentes de firewall revisadas periódicamente (sin reglas 'any-any' injustificadas).",
      "Políticas activas de filtrado web/DNS bloqueando categorías de riesgo (malware, phishing)."
    ],
    prueba: "Inspección de reglas de firewall, revisión de segmentación de VLANs y prueba de acceso a una URL de categoría bloqueada.",
    riesgo: "Movimiento lateral rápido de atacantes dentro de la red o descarga de malware desde sitios web comprometidos."
  },
  {
    id: "8.24",
    dominio: "8. Tecnológicos",
    nuevo2022: false,
    numeral: "ISO/IEC 27002:2022 — Control 8.24 (Uso de criptografía)",
    palabras_clave: ["Criptografía"],
    sinonimos: ["cifrado", "tls", "https", "aes", "llaves", "kms", "certificados", "A.8.24"],
    objetivo: "Definir y aplicar el uso eficaz de criptografía y gestión de llaves para proteger confidencialidad, autenticidad e integridad.",
    evidencia: [
      "Política de criptografía definiendo algoritmos robustos vigentes (ej. AES-256, TLS 1.2/1.3).",
      "Inventario de certificados digitales y procedimientos de gestión de llaves (KMS/HSM).",
      "Evidencia de cifrado en tránsito y en reposo en bases de datos y canales críticos."
    ],
    prueba: "Inspección de certificados TLS y verificación técnica de algoritmos activos (confirmando ausencia de SSL/TLS 1.0/1.1).",
    riesgo: "Interceptación o descifrado de datos sensibles en tránsito o en reposo por uso de algoritmos obsoletos o llaves comprometidas."
  },
  {
    id: "8.28",
    dominio: "8. Tecnológicos",
    nuevo2022: true,
    numeral: "ISO/IEC 27002:2022 — Control 8.28 (Codificación segura)",
    palabras_clave: ["Desarrollo Seguro y Cambios"],
    sinonimos: ["secure coding", "owasp", "sast", "dast", "devsecops", "sonarqube", "8.25", "8.28", "A.8.28"],
    objetivo: "Aplicar principios y prácticas de codificación segura durante todo el ciclo de vida del software para minimizar vulnerabilidades.",
    evidencia: [
      "Guía o estándar interno de codificación segura basado en referentes (ej. OWASP).",
      "Reportes de análisis estático/dinámico (SAST/DAST) integrados en el pipeline CI/CD.",
      "Registros de revisión de código por pares (Pull Requests) antes de liberar."
    ],
    prueba: "Inspección de pipeline CI/CD (GitHub Actions/GitLab/Azure DevOps) validando bloqueo de despliegues ante hallazgos críticos.",
    riesgo: "Introducción en producción de fallas graves como inyección SQL, XSS o exposición de secretos en el código fuente."
  },
  {
    id: "8.32",
    dominio: "8. Tecnológicos",
    nuevo2022: false,
    numeral: "ISO/IEC 27002:2022 — Control 8.32 (Gestión de cambios)",
    palabras_clave: ["Desarrollo Seguro y Cambios"],
    sinonimos: ["cambios", "pase a produccion", "rollback", "cab", "ambientes separados", "8.31", "8.32", "A.8.32"],
    objetivo: "Controlar formalmente todos los cambios en infraestructura y software mediante pruebas, aprobaciones y planes de reversión.",
    evidencia: [
      "Procedimiento de gestión de cambios (incluyendo cambios estándar y de emergencia).",
      "Tickets de cambio con evidencias de pruebas previas (UAT/QA), aprobación y plan de rollback.",
      "Separación lógica de ambientes de desarrollo, pruebas y producción (Control 8.31)."
    ],
    prueba: "CAATs: selección aleatoria de pases a producción recientes en logs/repositorios y cruce contra tickets de cambio aprobados.",
    riesgo: "Caídas de servicio en producción o introducción de vulnerabilidades por despliegues improvisados sin pruebas ni autorización."
  }
];