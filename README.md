# FoundersHub

FoundersHub is a **Next.js 15** platform where entrepreneurs can submit their startup ideas for virtual pitch competitions, browse other pitches, and gain exposure. With a clean and minimalistic design, FoundersHub delivers a smooth user experience.

## Deployed Site
<a href="https://founders-hub-new.vercel.app/"> Click here to view the site </a>


---

## ⚙️ Tech Stack

- **React** 19
- **Next.js** 15
- **Sanity** (CMS)
- **TailwindCSS**
- **ShadCN**
- **TypeScript**

---

## 🔋 Features

- **Live Content API**: Displays the latest startup ideas dynamically on the homepage using Sanity's Content API.
- **GitHub Authentication**: Allows users to log in easily using their GitHub account.
- **Pitch Submission**: Users can submit startup ideas, including title, description, category, and multimedia links (image or video).
- **View Pitches**: Browse through submitted ideas with filtering options by category.
- **Pitch Details Page**: Click on any pitch to view its details, with multimedia and description displayed.
- **Profile Page**: Users can view a list of the pitches they've submitted.
- **Editor Picks**: Admins can highlight top startup ideas via Sanity Studio.
- **Views Counter**: Tracks the number of views for each pitch.
- **Search**: Search functionality to load and view pitches efficiently.
- **Minimalistic Design**: Simple UI with essential pages, providing a clean aesthetic and ease of use.

---

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone <Website>
cd FoundersHub
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION='vX'
SANITY_TOKEN=

AUTH_SECRET= 
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```

Replace the placeholder values with your actual Sanity credentials. You can obtain these credentials by signing up &
creating a new project on the [Sanity website](https://www.sanity.io/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

