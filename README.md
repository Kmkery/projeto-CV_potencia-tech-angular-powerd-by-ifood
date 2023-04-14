# Curriculum Online

Página baseada no [repositório de desafios da DIO (CV Online)](https://github.com/digitalinnovationone/cv), cujo propósito consiste em reproduzir e tentar realizar algumas melhorias, como forma de exercitar os conhecimentos.

O HTML deste repositório usa [referências do tutorial W3C.CSS do W3 Schools](https://www.w3schools.com/howto/howto_website_create_resume.asp
).

Alterações feitas aqui:

 - Adição de modo escuro
 - Dados são passados via JSON e inseridos na página dinamicamente

## Descrição

Os dados estão em formato JSON e obedecem a seguinte estrutura:

```js
[{
    "user_name": "Nome do perfil",
    "user_occupation": "nome do cargo",
    "user_local": "cidade/país",
    "user_email": "e-mail para contato (se houver)", 
    "user_phone": "telefone para contato (se houver)",
    "user_skills": [
        {
            "skill": "nome da habilidade", 
            "level": "nível de conhecimento (em dígitos)"
        }
    ],
    "user_languages": [
        {
            "language": "nome do idioma", 
            "level": "nível de fluência (em dígitos)"
        }
    ],
    "user_about": "Descrição do perfil",
    "user_experiences": [
        {
            "experience": "nome da experiência", 
            "period": 
                {
                    "start": "data de início", 
                    "conclusion": "data de conclusão (se houver)"
                }, 
            "experience_description": "descrição da experiência"
        }
    ],
    "user_education": [
        {
            "institution": "nome da instutuição de ensino", 
            "period": {
                "start": "data de início", 
                "conclusion": "data de conclusão (se houver)"
            }, 
            "education_description": "descrição do curso", 
            "subjects": [
                {
                    "subject_name": "conteúdo do curso", 
                    "subject_link":  "link do curso (se houver)"
                }
            ]
        }
    ],
    "user_projects": [
        {
            "project_icon":"fa-fa-github",
            "project_link": "link do repositório do projeto",
            "project_description": "descrição do projeto", 
            "inProgress": "recebe true ou false"
        }
    ],
    "user_medias": [
        {
            "media_name": "nome da rede social", 
            "media_link": "link da página"
        }
    ]

}]
``` 
### Nota:
 - Os campos para **e-mail** e **phone** não serão renderizados caso as chaves `user_email` e `user_phone` contenham string vazia _`""`_.
 - No campo _Experiences_ da página, caso não haja data de conclusão (chave _`user_experiences.period.conclusion: ""`_), a página irá mostrar uma tag **"Present"**. De forma semelhante, no Campo _Education_ da página, caso não haja data de conclusão (chave _`user_education.period.conclusion: ""`_), a página irá mostrar a tag **"In progress"**. 
 - No campo _Projects_ da página, pode-se sinalizar se o projeto inserido ainda está em curso, para isto, a chave _`user_projects.inProgress`_ deve receber o valor de _`true`_. Isto fará com que a página exiba a tag **"In progress"**.  
 - No campo _Education_, caso não haja nenhum link (chave _`user_education.subjects.subject_link: ""`_), a página não criará nenhuma âncora.
 - Os ícones no campo _Projects_ são renderizados de acordo com a referência da [W3C Schoools sobre ícones](https://www.w3schools.com/icons/icons_reference.asp).  Com base na plataforma na qual o repositório do projeto se encontra, a chave _`user_projects.project_icon`_ deve ser altarada para a expressão com o nome da plataforma (_"fa fa-nome-da-plataforma"_), caso exista na opção na documentação do W3C Schools (consultar referência citada). Da mesma forma, no rodapé da página, os ícones das redes sociais devem ser alterados mudando o valor da chave _`user_medias.media_icon`_ para a expressão com o nome da plataforma. 

 


