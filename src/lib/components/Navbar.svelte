<script lang="ts">

    export let activePage: "about" | "projects" | "contact" = "about";


</script>

<div id="navbar">
    <div id="navbar-content">
        <div id="navbar-logo">
            <a href="/about">
                <img src="/assets/logo.svg" alt="logo" />
            </a>
        </div>
        <div id="navbar-links">
            <a href="/about" class:active={activePage === "about"}>About</a>
            <a href="/projects" class:active={activePage === "projects"}>Projects</a>
            <a href="/contact" class:active={activePage === "contact"}>Contact</a>
        </div>
    </div>
</div>

<style lang="scss">

    #navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 60px;
        background-color: #1E1E1E;
        z-index: 2;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #navbar-content {
        width: 100%;
        max-width: 1200px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #navbar-logo {
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #navbar-logo img {
        width: 100%;
        height: 100%;
    }

    #navbar-links {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #navbar-links a {
        height: 100%;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFFFFF;
        font-size: 18px;
        font-weight: 500;
        text-decoration: none;
        transition: 0.2s;
    }
</style>