#addin "nuget:https://www.nuget.org/api/v2?package=Cake.Npm"
var target = Argument("target", "Default");
var environmentBuild = Argument("EnvironmentBuild", "Local"); // Local, Azure, Live2, Live1



Task("Default")
    .IsDependentOn("Clean")
    .IsDependentOn("Restore")
    .IsDependentOn("Build")
    .IsDependentOn("Deploy")    
    .Does(() => 
    {
        Information("Build Successful!");
    });

Task("Clean")
    .Does(() =>
    {
        // // Delete a file.
        // DeleteFile("./file.txt");

        // // Clean a directory.
        // CleanDirectory("./temp");
    });

Task("Restore")
    .Does(() => 
    {
        Information("Running Restore!");
    });

Task("Build")
    .Does(() =>
    {
        // MSBuild("./MassiveLuke.sln");
        var npmSettings = new NpmRunScriptSettings{};
        npmSettings.FromPath("./MassiveLuke");
        npmSettings.ScriptName = "build";

        Information("Running Webpack!");
        NpmRunScript(npmSettings);

        Information("Running DotNetCore build!");
        DotNetCoreBuild(".");
    });

Task("Deploy")
    .Does(() =>
    {
        if (environmentBuild == "Local")
        {
            
        }
        else if (environmentBuild == "Azure")
        {
            
        }
        else if (environmentBuild == "Live2")
        {
            
        }
        else if (environmentBuild == "Live1")
        {
            
        }
    });


RunTarget(target);

